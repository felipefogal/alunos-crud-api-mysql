import { auth } from "express-oauth2-jwt-bearer";
import dotenv from "dotenv/config.js";

const audienceRoute = process.env.AUTH0_AUDIENCE

const checkJwt = auth({
  audience: audienceRoute,
  // audience: 'https://dev-i34u0vgofp0k1gx0.us.auth0.com/api/v2/',
  issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}`,
  tokenSigningAlg: "RS256",
});

export { checkJwt };
