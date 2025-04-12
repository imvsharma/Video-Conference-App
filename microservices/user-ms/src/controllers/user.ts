import { NextFunction, Request, Response } from "express";
import User from "../models/user";
import { CONSTANT } from "../config/constant";
 


class UserController {
  /**
   * Description
   * @param {any} req:Request
   * @param {any} res:Response
   * @param {any} next:NextFunction
   * @returns {any}
   */
  getUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const users = await User.findAll()
      res.status(CONSTANT.STATUS_CODES.OK).json(users)
    } catch (error) {
      res.status(CONSTANT.STATUS_CODES.INTERNAL_SERVER_ERROR).json({error: "Unable to fetch users"})
    }
  }

  createUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      console.log(req.body)
      const user = await User.create(req.body)
      res.status(CONSTANT.STATUS_CODES.CREATED).json(user)
    } catch (error) {
      res.status(CONSTANT.STATUS_CODES.INTERNAL_SERVER_ERROR).json({error: "Unable to create user"})
    }
  }

  getUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params
      const user = await User.findByPk(id)
      if(!user) {
        res.status(CONSTANT.STATUS_CODES.NOT_FOUND).json({error: 'User not found'})
      } else {
        res.status(CONSTANT.STATUS_CODES.OK).json(user)
      }
    } catch (error) {
      res.status(CONSTANT.STATUS_CODES.INTERNAL_SERVER_ERROR).json({error: "Unable to get user"})
    }
  }

  updateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params
      const user = await User.findByPk(id)
      if (!user) {
        res.status(CONSTANT.STATUS_CODES.NOT_FOUND).json({error: 'User not found'})
        return
      }
      const updatedUser = await user.update(req.body)
      res.status(CONSTANT.STATUS_CODES.OK).json(updatedUser)

      // const user = await User.create(req.body)
      // res.status(CONSTANT.STATUS_CODES.CREATED).json(user)
    } catch (error) {
      res.status(CONSTANT.STATUS_CODES.INTERNAL_SERVER_ERROR).json({error: "Unable to create user"})
    }
  }

  deleteUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params
      const user = await User.findByPk(id)
      if(!user) {
        res.status(CONSTANT.STATUS_CODES.NOT_FOUND).json({error: 'User not found'})
      } else {
        await user.destroy()
        res.status(CONSTANT.STATUS_CODES.NO_CONTENT).send()
      }
    } catch (error) {
      res.status(CONSTANT.STATUS_CODES.INTERNAL_SERVER_ERROR).json({error: "Unable to delete user"})
    }
  }
}


export default UserController
