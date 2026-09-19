import express from "express";
import { checkJwt } from "../middlewares/auth.middleware.js";
import {
  createCurso,
  getCursos,
  getCursoById,
  updateCurso,
  deleteCurso,
} from "../controllers/cursoController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Curso
 *   description: Operações relacionadas a cursos
 */

/**
 * @swagger
 * /curso:
 *   get:
 *     summary: Retorna uma lista de cursos
 *     tags: [Curso]
 *     responses:
 *      200:
 *        description: Lista de cursos retornada com sucesso
 */
router.get("/curso", checkJwt, getCursos);

/**
 * @swagger
 * /curso/{id}:
 *   get:
 *     summary: Retorna um curso pelo ID
 *     tags: [Curso]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: ID do curso
 *     responses:
 *      200:
 *        description: Curso retornado com sucesso
 *      404:
 *        description: Curso não encontrado
 */
router.get("/curso/:id", checkJwt, getCursoById);

/**
 * @swagger
 * /curso:
 *   post:
 *     summary: Cria um novo curso
 *     tags: [Curso]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Curso'
 *     responses:
 *      201:
 *        description: Curso criado com sucesso
 *      400:
 *        description: Requisição inválida
 */
router.post("/curso", checkJwt, createCurso);

/**
 * @swagger
 * /curso/{id}:
 *   put:
 *     summary: Atualiza um curso pelo ID
 *     tags: [Curso]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: ID do curso
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Curso'
 *     responses:
 *      200:
 *        description: Curso atualizado com sucesso
 *      404:
 *        description: Curso não encontrado
 */
router.put("/curso/:id", checkJwt, updateCurso);

/**
 * @swagger
 * /curso/{id}:
 *   delete:
 *     summary: Deleta um curso pelo ID
 *     tags: [Curso]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: ID do curso
 *     responses:
 *      200:
 *        description: Curso deletado com sucesso
 *      404:
 *        description: Curso não encontrado
 */
router.delete("/curso/:id", checkJwt, deleteCurso);

export default router;
