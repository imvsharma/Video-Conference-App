import * as bcryptjs from 'bcryptjs'

export const hashedPassword = async (password: string) : Promise<string> => {
  const salt = await bcryptjs.genSalt(10);
  return bcryptjs.hash(password, salt);
}

export const isPasswordValid = async (password: string, hash: string) : Promise<boolean> => {
  return bcryptjs.compareSync(password, hash);
}