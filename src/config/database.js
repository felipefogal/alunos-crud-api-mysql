import { Sequelize } from "sequelize";
import dotenv from "dotenv/config.js";

/*Conexão local utilizando MySQL Workbench*/
const sequelize = new Sequelize(process.env.DB_LOCAL_NAME, process.env.DB_LOCAL_USER, process.env.DB_LOCAL_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.log("Unable to connect to the database:", err);
  });

export default sequelize;
