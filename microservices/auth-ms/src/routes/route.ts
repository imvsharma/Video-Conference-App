import { Router } from "express";

export abstract class Route {
  public router: Router;
  public routerPrefix: string;

  constructor (routePrefix = "") {
    this.router = Router();
    this.routerPrefix = routePrefix;
    this.setupRoutes();
  }

  abstract setupRoutes(): void;
}