import { auth } from "express-oauth2-jwt-bearer";
import "dotenv/config.js";

const audienceRoute = process.env.AUTH0_AUDIENCE

const checkJwt = auth({
  audience: audienceRoute,
  issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}`,
  tokenSigningAlg: "RS256",
});

export { checkJwt };
