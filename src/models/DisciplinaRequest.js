import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Disciplina = sequelize.define("Disciplina", {
    codDisciplina:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nomeDisciplina: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cursoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "Cursos",
            key: "cursoId",
        },
    },
});

export default Disciplina;