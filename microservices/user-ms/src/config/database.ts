import { Sequelize } from "sequelize";
import config from "./config";


const sequelize = new Sequelize(
  config.dbName as string,
  config.dbUser as string,
  config.dbPassword as string,
  {
    host: config.dbHost,
    port: config.dbPort,
    dialect: 'postgres',
  }
)

export default sequelize