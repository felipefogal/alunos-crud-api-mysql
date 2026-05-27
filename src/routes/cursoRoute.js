import express from "express";
import {
  createCurso,
  getCursos,
  getCursoById,
  updateCurso,
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
router.get("/curso", getCursos);

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
 *     404:
 *       description: Curso não encontrado
 */
router.get("/curso/:id", getCursoById);

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
*     400:
*       description: Requisição inválida
 */
router.post("/curso", createCurso);

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
*     404:
*       description: Curso não encontrado
 */
router.put("/curso/:id", updateCurso);

export default router;
