import {Request, Response, NextFunction} from 'express'
import { z, ZodError } from 'zod'
import { CONSTANT } from '../config/constant'


const validateSchema = (schema: z.ZodObject<any, any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next()
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessages = error.errors.map((issue: any) => ({
          message: `${issue.path.join('.')} is ${issue.message}`,
        }))
        res.status(CONSTANT.STATUS_CODES.BAD_REQUEST).json({ error: 'Invalid data', details: errorMessages });
      } else {
        res.status(CONSTANT.STATUS_CODES.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
      }
    }
  }
}

export default validateSchema
