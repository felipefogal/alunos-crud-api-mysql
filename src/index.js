import express from "express";
import cors from "cors";
import authRoute from "./routes/auth.routes.js";
import alunoRoute from "./routes/alunoRoute.js";
import cursoRoute from "./routes/cursoRoute.js";
import disciplinaRoute from "./routes/disciplinaRoute.js";
import professorRoute from "./routes/professorRoute.js";
import sequelize from "./config/database.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger.js";

const app = express();
const PORT = process.env.PORT || 3010;

app.use(express.json());
app.use("/api", authRoute);
app.use("/api", alunoRoute);
app.use("/api", cursoRoute);
app.use("/api", disciplinaRoute);
app.use("/api", professorRoute);

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use((err, req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (err.status === 401) {
    return res.status(401).json({ 
      error: 'Não autorizado.',
      message: 'Token ausente, inválido ou expirado.' 
    });
  }
  if (err.status === 403) {
    return res.status(403).json({ 
      error: 'Acesso negado.',
      message: 'Você não tem permissão para acessar este recurso.' 
    });
  }
  next();
});

app.use(cors({ origin: "*" }));

sequelize
  .sync()
  .then(() => {
    console.log("Database connected and synced.");
    app.listen(
      PORT,
      () => console.log(`Server running on http://localhost:${PORT}`),
      console.log("Swagger em http://localhost:3010/api-docs"),
    );
  })
  .catch((err) => console.error("Database connection failed:", err));

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});
