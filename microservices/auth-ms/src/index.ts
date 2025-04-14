

import express, { Application, json, NextFunction, Request, Response } from 'express';
import config from './config/config';
import { AuthRoutes } from './routes/auth';
import passport from 'passport';
import authLocalStrategy from './Strategies/local.strategy';

const errorLogger = (err:any, req:Request, res:Response, next: NextFunction) => {
  // logs error to console and then passes to next middleware
  console.log("error middleware")
  console.error(err.stack);
  next(err);
}

const PORT = config.port
const microserviceName = process.env.MICROSERVICE_NAME

class Express {
  public express: express.Application;
  private isError: boolean

  constructor() {
    this.express = express()
    this.isError = false
    this.loadMiddlewares(this.express)
    this.loadRoutes(this.express)
    this.express.use(errorLogger)
  }

  private async loadMiddlewares (app: Application): Promise <any> {
    app.use(json())
    //app.use(passport.initialize());
    passport.use(authLocalStrategy)
  }

  private async loadRoutes(app: Application): Promise<any> {
    this.loadAuthRoutes(app)
  }

  private async loadAuthRoutes(app: Application): Promise<any> {
    const authRoutes: AuthRoutes = new AuthRoutes()
    app.use(authRoutes.routerPrefix, authRoutes.router)
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