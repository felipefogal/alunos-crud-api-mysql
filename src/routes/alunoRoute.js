import express from "express";
import {
  createAluno,
  getAlunos,
  getAlunoById,
  updateAluno,
  deleteAluno,
} from "../controllers/alunoController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Aluno
 *   description: Operações relacionadas a alunos
 */

/**
 * @swagger
 * /aluno:
 *   get:
 *     summary: Retorna uma lista de alunos
 *     tags: [Aluno]
 *     responses:
 *      200:
 *        description: Lista de alunos retornada com sucesso
 */
router.get("/aluno", getAlunos);

/**
 * @swagger
 * /aluno/{id}:
 *   get:
 *     summary: Retorna um aluno pelo ID
 *     tags: [Aluno]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: ID do aluno
 *     responses:
 *      200:
 *        description: Aluno retornado com sucesso
 *     404:
 *       description: Aluno não encontrado
 */
router.get("/aluno/:id", getAlunoById);

/**
 * @swagger
 * /aluno:
 *   post:
 *     summary: Cria um novo aluno
 *     tags: [Aluno]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Aluno'
 *     responses:
 *      201:
 *        description: Aluno criado com sucesso
 *     400:
 *      description: Requisição inválida
 */
router.post("/aluno", createAluno);

/**
 * @swagger
 * /aluno/{id}:
 *   put:
 *     summary: Atualiza um aluno pelo ID
 *     tags: [Aluno]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: ID do aluno
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Aluno'
 *     responses:
 *      200:
 *        description: Aluno atualizado com sucesso
 *     404:
 *       description: Aluno não encontrado
 */
router.put("/aluno/:id", updateAluno);

/**
 * @swagger
 * /aluno/{id}:
 *   delete:
 *     summary: Exclui um aluno pelo ID
 *     tags: [Aluno]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: ID do aluno
 *     responses:
 *      200:
 *        description: Aluno excluído com sucesso
 *     404:
 *       description: Aluno não encontrado
 */
router.delete("/aluno/:id", deleteAluno);

export default router;
