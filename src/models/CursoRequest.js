import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Curso = sequelize.define("Curso", {
  cursoId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nomeCurso: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  descricaoCurso: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  areaCurso: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  periodoCurso: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  flagAtivoCurso: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
});
export default Curso;
