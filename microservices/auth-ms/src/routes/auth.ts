import passport from "passport";
import { Route } from "./route";
import AuthController from "../controllers/auth";

export class AuthRoutes extends Route{
  private authController: AuthController = new AuthController()

  constructor () {
    super('/auth')
  }

  setupRoutes(): void {
    this.router.post('/login', passport.authenticate('local',{ session: false }), (req, res, next) => this.authController.login(req, res, next))
    // this.router.get('/', (req, res, next) => this.userController.getUsers(req, res, next))
      // this.router.post('/', (req, res, next) => this.userController.createUser(req, res, next))
      // this.router.get('/:id', (req, res, next) => this.userController.getUser(req, res, next))
      // this.router.patch('/:id', (req, res, next) => this.userController.updateUser(req, res, next))
      // this.router.delete('/:id', (req, res, next) => this.userController.deleteUser(req, res, next))
  }
}
