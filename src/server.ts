/* eslint-disable no-console */
import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";
import env from "./config/env";


let server: Server;
const startServer = async () => {
  try {
    console.log(env.nodeEnv);
    await mongoose.connect(env.mongodbUri);
    console.log("Connected to MongoDB");
    server = app.listen(env.port, () => {
      console.log(`Server is running on http://localhost:${env.port}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
startServer();
// Handel unhandle rejection 
process.on("unhandledRejection", () => {
  console.log("Unhandled Rejection, shutting down...");
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1)
});



// Handel uncought  rejection 
process.on("uncaughtException", () => {
  console.log("Unhandled Exception, shutting down...");
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1)
});

// unhandledRejection error
// throw new Error("I Forgot catch the local error ");

process.on("SIGTERM", () => {
  console.log("SIGTERM received, shutting down...");
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1)
});