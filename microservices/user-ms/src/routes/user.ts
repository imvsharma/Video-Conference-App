import UserController from "../controllers/user";
import { Route } from "./route";

export class UserRoutes extends Route{
  private userController = new UserController()

  constructor () {
    super('/users')
    console.log(this.userController)
  }

  setupRoutes(): void {
      this.router.get('/', (req, res, next) => this.userController.getUsers(req, res, next))
      this.router.post('/', (req, res, next) => this.userController.createUser(req, res, next))
      this.router.get('/:id', (req, res, next) => this.userController.getUser(req, res, next))
      this.router.patch('/:id', (req, res, next) => this.userController.updateUser(req, res, next))
      this.router.delete('/:id', (req, res, next) => this.userController.deleteUser(req, res, next))
  }
}
