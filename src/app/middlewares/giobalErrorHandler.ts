import { NextFunction, Request, Response } from "express";
import env from "../../config/env";
import AppError from "../errorHelpers/AppError";

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
export const globalErrorHandler = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  err: any,
  req: Request,
  res: Response,
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) => {
  let statusCode = 500;
  let message = "Something went wrong!";

  if (err instanceof AppError){
    statusCode = err.statusCode;
    message = err.message;
  }

  res.status(statusCode).json({
    success: false,
    message,
    error: env.nodeEnv === "development" ? err : undefined,
    stack: env.nodeEnv === "development" ? err?.stack : undefined,
  });
};
