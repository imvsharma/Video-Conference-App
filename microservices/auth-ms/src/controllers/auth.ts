import { NextFunction, Request, Response } from "express";
import { CONSTANT } from "../config/constant";
import * as jwt from 'jsonwebtoken'
import config from "../config/config";

declare global {
  namespace Express {
    interface User {
      id: number,
      email: string
    }
  }
}

 
class AuthController {
  
  login = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
      console.error(`[AUTH-MS] [Auth Controller] [login] :: User :: ${JSON.stringify(req.user)}`)
      if(req.user) {
        const token = jwt.sign({user: req.user}, config.secret, {expiresIn: '1hr'})
        return res.status(CONSTANT.STATUS_CODES.OK).json({access_token: token, email: req.user?.email})
      }
      
    } catch (error) {
      
    }
  }

}


export default AuthController
