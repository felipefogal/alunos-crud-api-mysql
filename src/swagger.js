import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Alunos CRUD API",
      version: "1.0.0",
      description: "API para gerenciamento de alunos e cursos",
    },
    servers: [
      {
        url: "http://localhost:3010/api",
        description: "Servidor de desenvolvimento",
      },
    ],

    components: {
      schemas: {
        Aluno: {
          type: "object",
          properties: {
            nome: {
              type: "string",
              example: "João Silva",
              description: "Nome completo do aluno",
              required: true,
            },
            email: {
              type: "string",
              example: "joao.silva@example.com",
              description: "Endereço de email do aluno",
            },
            endereco: {
              type: "string",
              example: "Rua das Flores, 123",
              description: "Endereço residencial do aluno",
            },
            telefone: {
              type: "string",
              example: "(11) 99999-9999",
              description: "Número de telefone do aluno",
            },
            documento: {
              type: "string",
              example: "123.456.789-00",
              description: "Número do documento do aluno",
            },
            rm: {
              type: "string",
              example: "12345",
              description: "Registro acadêmico do aluno",
            },
            cursoId: {
              type: "integer",
              example: 1,
              description: "ID do curso associado ao aluno",
            },
          },
        },
        Curso: {
          type: "object",
          properties: {
            nome: {
              type: "string",
              example: "Engenharia de Software",
              description: "Nome do curso",
              required: true,
            },
            descricao: {
              type: "string",
              example: "Curso focado em desenvolvimento de software",
              description: "Descrição do curso",
            },
          },
        },
        Disciplina: {
          type: "object",
          properties: {
            nome: {
              type: "string",
              example: "Programação Web",
              description: "Nome da disciplina",
              required: true,
            },
            descricao: {
              type: "string",
              example: "Disciplina de programação web",
              description: "Descrição da disciplina",
            },
          },
        },
        Matricula: {
          type: "object",
          properties: {
            alunoId: {
              type: "integer",
              example: 1,
              description: "ID do aluno",
            },
            disciplinaId: {
              type: "integer",
              example: 1,
              description: "ID da disciplina",
            },
          },
        },
      },
    },
  },
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
