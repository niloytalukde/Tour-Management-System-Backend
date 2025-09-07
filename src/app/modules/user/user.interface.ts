import { Types } from "mongoose";

export enum Role {
  SuperAdmin = "super_admin",
  Admin = "admin",
  User = "user",
  Guide = "guide",
}

// Provider
export interface IAuthProvider {
  provider: string; // google credential
  providerId: string;
}

export enum IsActive {
  Active = "active",
  Inactive = "inactive",
  Blocked = "blocked",
}

export interface IUser {
  name: string;
  email: string;
  password?: string;
  phone?: string;
  picture?: string;
  address?: string;
  isDeleted?: string;
  isActive?: string;
  isVerified?: string;
  auths: IAuthProvider[];
  role: Role;
  bookings?: Types.ObjectId[];
  guides?: Types.ObjectId[];
}
