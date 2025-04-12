
import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";
import { hashedPassword, isPasswordValid } from "../utils/utils";

interface IUser {
  id: number;
  name: string;
  email: string;
  password: string
}

interface IUserCreation extends Omit<IUser, 'id'> {}

class User extends Model<IUser, IUserCreation> implements IUser{
  public id!: number
  public name!: string;
  public email!: string;
  public password!: string;


  public readonly createdAt!:Date
  public readonly updatedAt!:Date

  static isValidPassword = async (password: string, hash: string) => {
    return isPasswordValid(password,hash)
  }
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  hooks: {
    beforeCreate: async (user) => {
      if (user.password) {
        user.password = await hashedPassword(user.password);
      }
    },
    beforeUpdate: async (user, options) => {
      if (options.fields?.includes('password') && user.changed('password')) {
        user.password = await hashedPassword(user.password);
      }
    }
  },
  sequelize, 
  tableName: 'users'
})

export default User