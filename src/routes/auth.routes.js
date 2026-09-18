import express from "express";
import { getToken } from "../services/auth.service.js";

const router = express.Router();

router.post("/token", async (req, res) => {
  const { client_id, client_secret } = req.body;

  if (!client_id || !client_secret) {
    console.log(req.body);
    return res
      .status(400)
      .json({ error: "client_id e client_secret são obrigatórios." });
  }

  try {
    const tokenData = await getToken(client_id, client_secret);
    res.json(tokenData);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

export default router;
