import axios from "axios";
import config from "../config/config";
import { CONSTANT } from "../config/constant";

class UserHelper {
  user_ms_url = config.userServiceUrl
  getUserByEmail = async (email: string, password: string) => {
    try {
      const response = await axios.get(`http://${this.user_ms_url}/users?email=${email}&password=${password}`)
      let user = null
      if (response && response.status === CONSTANT.STATUS_CODES.OK) {
        user =response.data
      }
      return user
    } catch (error:any) {
      if (error.response.status === CONSTANT.STATUS_CODES.NOT_FOUND) {
        console.error(`[AUTH-MS] [USER HELPER] [getUserByEmail] :: Error while fetching user details :: ${JSON.stringify(error.response.data)}`)
        return error.response.data
      } else {
        console.error(`[AUTH-MS] [USER HELPER] [getUserByEmail] :: Error while fetching user details :: ${JSON.stringify(error)}`)
      }
      
    }
  }
}

const userHelper:UserHelper = new UserHelper()
export default userHelper