import mongoose from "mongoose";
import { User, UserModel } from "../../models/userdetails.model"
import { hashPassword } from "../../utils/common.util";
import { DbService } from "../../db/db-server";

export const userResolver = {
 query:  {
    async users(){
       await DbService.init({
      user: process.env.MONGODB_USERNAME || "admin",
      password: process.env.MONGODB_PASSWORD || "add",
      database: process.env.MONGO_DATABASE || "library-management",
    });
        console.log("add", await UserModel.find({}));
        return await UserModel.find({});
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async user(_: any, args : {id: string}){
        const objectId = new mongoose.Types.ObjectId(args.id);
        console.log("objectId", objectId);
        return await UserModel.findOne({_id: objectId})
    }
//  user : {
//     books(_parent, )
//  }
 },
 mutations: {
    async createUser(_: unknown, userDetails: {user: User}) {
        const {user} = userDetails;
        console.log("User", JSON.stringify(user), user.password);
        user.password = await hashPassword(user.password) as unknown as string;
        const newUser = (await UserModel.create(user)).save();
        return newUser;
    }
 }
}