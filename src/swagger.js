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
            nome: { type: "string", example: "João Silva" },
            email: { type: "string", example: "joao.silva@example.com" },
            endereco: { type: "string", example: "Rua das Flores, 123" },
            telefone: { type: "string", example: "(11) 99999-9999" },
            documento: { type: "string", example: "123.456.789-00" },
            rm: { type: "string", example: "12345" },
            cursoId: { type: "integer", example: 1 },
          },
        },
        Curso: {
          type: "object",
          properties: {
            nomeCurso: { type: "string", example: "Engenharia de Software" },
            descricaoCurso: { type: "string", example: "Curso focado em desenvolvimento de software" },
            areaCurso: { type: "string", example: "Tecnologia" },
            periodoCurso: { type: "string", example: "Noturno" },
            flagAtivo: { type: "boolean", example: true },
          },
        },
        Disciplina: {
          type: "object",
          properties: {
            nomeDisciplina: { type: "string", example: "Programação Web"}          },
        },
        Professor: {
          type: "object",
          properties: {
            nomeProfessor: { type: "string", example: "Dr. John Doe" },
            titulacao: { type: "string", example: "Doutor" },
          },
        },
      },
    },
  },
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
