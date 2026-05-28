import express from "express";
import {
  createProfessor,
  getProfessores,
  getProfessorById,
  updateProfessor,
  deleteProfessor,
} from "../controllers/professorController.js";

const router = express.Router();

router.get("/professor", getProfessores);
router.get("/professor/:id", getProfessorById);
router.post("/professor", createProfessor);
router.put("/professor/:id", updateProfessor);
router.delete("/professor/:id", deleteProfessor);

export default router;
