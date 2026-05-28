import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Professor = sequelize.define("Professor", {
  re: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nomeProfessor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  titulacao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Professor;