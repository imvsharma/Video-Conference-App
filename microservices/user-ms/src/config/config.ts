import * as dotenv from 'dotenv'

dotenv.config();

class Config {
  public port:number;
  public nodeEnv: string;
  public dbName: string;
  public dbUser: string;
  public dbPassword: string;
  public dbPort: number;
  public dbHost: string;

  constructor() {
    const {PORT, NODE_ENV, DB_NAME, DB_USER, DB_PASSWORD, DB_PORT, DB_HOST} = process.env
    this.port = parseInt(PORT || '3000', 10);
    this.nodeEnv = NODE_ENV || 'development'
    this.dbName = DB_NAME || 'users'
    this.dbUser = DB_USER || 'admin'
    this.dbPassword = DB_PASSWORD || 'secret'
    this.dbPort = parseInt(DB_PORT || '5432', 10)
    this.dbHost = DB_HOST || 'localhost'
  }
}

const config: Config = new Config()
export default config