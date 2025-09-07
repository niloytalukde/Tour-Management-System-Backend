import { model, Schema } from "mongoose";
import { IsActive, IUser, Role } from "./user.interface";

const authProviderSchema = new Schema({
    provider: {type:String, require:true},
    providerId:{type:String, require:true
    }
},{
    versionKey:false,
    _id:false
})
const userSchema = new Schema <IUser>({
    name :{type: String, required: true},   
    email: {type: String, required: true, unique: true},
    password:{type: String},
    role: {type: String, enum:Object.values(Role),default: Role.User},
    phone: {type: String},
    picture: {type: String},
    address: {type: String},
    isDeleted: {type: Boolean, default: false},
    isActive: {type: String, enum: Object.values(IsActive), default: IsActive.Active},
    isVerified: {type: Boolean, default: false},
    auths: [authProviderSchema],
    bookings: {type: [Schema.Types.ObjectId], ref: "Booking"},
    guides: {type: [Schema.Types.ObjectId], ref: "Guide"}
},{
    timestamps: true,
    versionKey: false
})

export const UserModel =model<IUser>("User",userSchema)