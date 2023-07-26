import Sequelize from "sequelize";
import 'dotenv/config';

// Sequelize(db_name, db_user, db_pass, {...Sequelize config})
const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    define: {
      timestamps: false
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 1000
    },
    operatorAlieses: false,
  }
);

export default db;