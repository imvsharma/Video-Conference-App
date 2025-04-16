

import express, { Application, json } from 'express';
import config from './config/config';
import sequelize from './config/database';
import { UserRoutes } from './routes/user';
import cors from 'cors'


const PORT = config.port
const microserviceName = process.env.MICROSERVICE_NAME

class Express {
  public express: express.Application;
  private isError: boolean

  constructor() {
    this.express = express()
    this.isError = false
    this.loadMiddlewares(this.express)
    this.loadDB()
    this.loadRoutes(this.express)
  }

  private async loadMiddlewares (app: Application): Promise <any> {
    app.use(cors())
    app.use(json())
  }

  private async loadDB (): Promise<any> {
    try {
      await sequelize.authenticate()
      await sequelize.sync()
      console.info('Connection has been established successfully.');
    } catch(error) {
      this.isError = true
      console.error('Unable to connect to the database:', error);
    }
  }

  private async loadRoutes(app: Application): Promise<any> {
    this.loadUserRoutes(app)
  }

  private async loadUserRoutes(app: Application): Promise<any> {
    const userRoutes: UserRoutes = new UserRoutes()
    app.use(userRoutes.routerPrefix, userRoutes.router)
  }

  public init (): any {
    if (!this.isError) {
      this.express.listen(PORT, () => {
        return console.log('\x1b[33m%s\x1b[0m', ` ${microserviceName} Running @ 'http://localhost:${PORT}'`);
      }).on('error', (_error) => {
        return console.log('Error: ', _error.message);
      })
    }
    
  }
}

export default new Express();