import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import userHelper from '../helpers/user.helper';

type LocalStratergyOptionType = {
  usernameField: string,
  passwordField: string
}

const options: LocalStratergyOptionType = {
  usernameField: 'email',
  passwordField: 'password'
}
const authLocalStrategy = new LocalStrategy(options, async (email, password, done) => {
  try {
    const user = await userHelper.getUserByEmail(email, password)
    console.log("authLocalStrategy",user)
    if(!user) {
      console.error(`[AUTH-MS] [LOCAL AUTH STRATEGY] [authLocalStrategy] :: User not found :: ${user}`)
      return done(null, false, {message: user['error']})
    }

    if(user && user.error) {
      console.error(`[AUTH-MS] [LOCAL AUTH STRATEGY] [authLocalStrategy] :: User error :: ${JSON.stringify(user)}`)
      return done(null, false, {message: user['error']})
    } else {
      console.info(`[AUTH-MS] [LOCAL AUTH STRATEGY] [authLocalStrategy] :: User found :: ${JSON.stringify(user)}`)
      return done(null, user)
    }
    
  } catch (error: any) {
    
    console.error(`[AUTH-MS] [LOCAL AUTH STRATEGY] [authLocalStrategy] :: Error while authLocalStrategy :: ${JSON.stringify(error)}`)
    return done(null, false, {message: JSON.stringify(error)})
  }
})

export default authLocalStrategy