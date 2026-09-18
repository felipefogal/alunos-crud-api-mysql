import "dotenv/config.js";

const AUTH0_TOKEN_URL = `https://${process.env.AUTH0_DOMAIN}/oauth/token`;

const tokenCache = new Map();

const getToken = async (client_id, client_secret) => {

    const agora = Date.now();
    const cached = tokenCache.get(client_id);

    if (cached && agora < cached.expiresAt - 60_000) {
        console.log(`[Auth] Usando token cacheado para cliend_id: ${client_id}.`);
        return {
            access_token: cached.token,
            expires_in: Math.floor((cached.expiresAt - agora) / 1000),
            token_type: 'Bearer'
        };
    }

    console.log(`[Auth] Buscando novo token no Auth0 para cliend_id: ${client_id}.`);

    const response = await fetch(AUTH0_TOKEN_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            client_id: client_id,
            client_secret: client_secret,
            audience: process.env.AUTH0_AUDIENCE,
            grant_type: 'client_credentials'
        })
    });

    if (!response.ok) {
        const erro = await response.json();
        throw new Error(`Credenciais inválidas: ${erro.error_description ?? response.statusText}`);
    }

    const data = await response.json();
    console.log(data);

    tokenCache.set(client_id, {
        token: data.access_token,
        expiresAt: agora + data.expires_in * 1000
    });

    console.log(`[Auth] Novo token obtido. Expira em ${data.expires_in} segundos.`);
    return {
        access_token: data.access_token,
        expires_in: data.expires_in,
        token_type: data.token_type
    };
}

export { getToken };
