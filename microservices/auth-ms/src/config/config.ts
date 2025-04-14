import * as dotenv from 'dotenv'

dotenv.config();

class Config {
  public port:number;
  public nodeEnv: string;
  public userServiceUrl: string
  public secret: string

  constructor() {
    const {PORT, NODE_ENV, USER_MS_API_URL, JWT_SECRET} = process.env
    this.port = parseInt(PORT || '3001', 10);
    this.nodeEnv = NODE_ENV || 'development';
    this.userServiceUrl = USER_MS_API_URL || 'user-ms:3000';
    this.secret = JWT_SECRET || 'secret'
  }
}

const config: Config = new Config()
export default config