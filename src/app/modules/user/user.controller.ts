/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { userServices } from "./user.servece";
import httpStatus from 'http-status-codes';
import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";



// Create User 
const createUser = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
  const user = await userServices.createUser(req.body);
   sendResponse(res,{
      success:true,
      statusCode:httpStatus.OK,
      message:"All User Retrieved Successfully",
      data:user,
    })
})

// Get All User
const getAllUser = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
const result = await userServices.getAllUser();
    sendResponse(res,{
      success:true,
      statusCode:httpStatus.OK,
      message:"All User Retrieved Successfully",
      data:result.data,
      // meta:result.meta
    })

})

export const userController = {
  createUser,
  getAllUser,
};
