import express from "express";
import {
  createProfessor,
  getProfessores,
  getProfessorById,
  updateProfessor,
  deleteProfessor,
} from "../controllers/professorController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *  name: Professor
 *  description: Operações relacionadas a professores
 */

/**
 * @swagger
 * /professor:
 *  get:
 *    summary: Retorna uma lista de professores
 *    tags: [Professor]
 *    responses:
 *      200:
 *        description: Lista de professores retornada com sucesso
 *      500:
 *        description: Erro ao retornar lista de professores
 */
router.get("/professor", getProfessores);

/**
 * @swagger
 * /professor/{id}:
 *  get:
 *    summary: Retorna um professor pelo ID
 *    tags: [Professor]
 *    parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: integer
 *      required: true
 *      description: ID do professor
 *    responses:
 *      200:
 *        description: Professor retornado com sucesso
 *      404:
 *        description: Professor não encontrado
 */
router.get("/professor/:id", getProfessorById);

/**
 * @swagger
 * /professor:
 *  post:
 *    summary: Cria um novo professor
 *    tags: [Professor]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Professor'
 *    respomses:
 *      201:
 *        description: Professor criado com sucesso
 *      400:
 *        descriptiom: Requisição inválida
 */
router.post("/professor", createProfessor);

/**
 * @swagger
 * /professor/{id}:
 *  put:
 *    summary: Atualiza um professor pelo ID
 *    tags: [Professor]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: ID do professor
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Professor'
 *    responses:
 *      200:
 *        description: Professor atualizado com sucesso
 *      404:
 *        description: Professor não encontrado
 */
router.put("/professor/:id", updateProfessor);

/**
 * @swagger
 * /professor/{id}:
 *  delete:
 *    summary: Exclui um professor pelo ID
 *    tags: [Professor]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: ID do professor
 *    responses:
 *      200:
 *        description: Professor excluído com sucesso
 *      404: 
 *        description: Professor não encontrado
 */
router.delete("/professor/:id", deleteProfessor);

export default router;
