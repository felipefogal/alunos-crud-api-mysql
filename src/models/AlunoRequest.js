import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Aluno = sequelize.define("Aluno", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  endereco: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  documento: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rm: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  turma: { type: DataTypes.STRING, allowNull: false },
  turno: { type: DataTypes.STRING, allowNull: false },
  cursoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Cursos",
      key: "cursoId",
    },
  },
});

export default Aluno;
