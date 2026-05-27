import express from "express";
import cors from "cors";
import alunoRoute from "./routes/alunoRoute.js";
import cursoRoute from "./routes/cursoRoute.js";
import sequelize from "./config/database.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger.js";

const app = express();
const PORT = process.env.PORT || 3010;

app.use(express.json());
app.use("/api", alunoRoute);
app.use("/api", cursoRoute);

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

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
