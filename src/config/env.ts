import dotenv from 'dotenv';
dotenv.config();

const env = {
  port: process.env.PORT || 3000,
  mongodbUri: process.env.MONGODB_URI || '',
  jwtSecret: process.env.JWT_SECRET || '',
    nodeEnv: process.env.NODE_ENV || 'development', 
};

export default env;
