import { IUser } from "./user.interface";
import { UserModel } from "./user.model";

const createUser = async (payload: Partial<IUser>) => {
  const { name, email } = payload;
  const user = await UserModel.create({
    name,
    email,
  });
  return user;
};

// Get All User 

const getAllUser = async()=>{
  const users =await UserModel.find({})
  const totalUser=UserModel.countDocuments({})

  return{
    data:users,
    meta:{
      total:totalUser
    }
  }
}

export const userServices = {
  createUser,
  getAllUser
};
