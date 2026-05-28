import express from "express";
import {
  createDisciplina,
  getDisciplinas,
  getDisciplinaById,
  updateDisciplina,
  deleteDisciplina,
} from "../controllers/disciplinaController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Disciplinas
 *   description: Operações relacionadas a disciplinas
 */
/**
 * @swagger
 * /disciplina:
 *  get:
 *   summary: Retorna uma lista de disciplinas
 *   tags: [Disciplinas]
 *   responses:
 *      200:
 *          description: Lista de disciplinas retornada com sucesso
 *      500:
 *          description: Erro ao retornar a lista de disciplinas
 * */
router.get("/disciplina", getDisciplinas);

/**
 * @swagger
 * /disciplina/{id}:
 *  get:
 *   summary: Retorna uma disciplina pelo ID
 *   tags: [Disciplinas]
 *   parameters:
 *   - in: path
 *     name: id
 *     schema:
 *       type: integer
 *     required: true
 *     description: ID da disciplina
 *   responses:
 *       200:
 *           description: Disciplina retornada com sucesso
 *       404:
 *           description: Disciplina não encontrada
 *       500:
 *           description: Erro ao retornar a disciplina
 * */
router.get("/disciplina/:id", getDisciplinaById);

/**
 * @swagger
 * /disciplina:
 *  post:
 *      summary: Cria uma nova disciplina
 *      tags: [Disciplinas]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Disciplina'
 *      responses:
 *          201:
 *              description: Disciplina criada com sucesso
 *          400:
 *              description: Requisição inválida
 *          500:
 *              description: Erro ao criar a disciplina
 * */
router.post("/disciplina", createDisciplina);

/**
 * @swagger
 * /disciplina/{id}:
 *  put:
 *      summary: Atualiza uma disciplina pelo ID
 *      tags: [Disciplinas]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: integer
 *          required: true
 *          description: ID da disciplina
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Disciplina'
 *      responses:
 *          200:
 *              description: Disciplina atualizada com sucesso
 *          400:
 *              description: Requisição inválida
 *          404:
 *              description: Disciplina não encontrada
 *          500:
 *              description: Erro ao atualizar a disciplina
 * */
router.put("/disciplina/:id", updateDisciplina);

/**
 * @swagger
 * /disciplina/{id}:
 *  delete:
 *      summary: Exclui uma disciplina pelo ID
 *      tags: [Disciplinas]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: integer
 *          required: true
 *          descriptiom: ID da disciplina
 *      responses:
 *          200:
 *              description: Disciplina excluída com sucesso
 *          404:
 *              description: Disciplina não encontrada
 *          500:
 *              description: Erro ao excluir a disciplina
 * */
router.delete("/disciplina/:id", deleteDisciplina);

export default router;
