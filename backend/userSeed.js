import User from "./models/User.js";
import bcrypt from "bcryptjs";
import { connectDb } from './config/db.js';

const userRegister = async () => {
    connectDb();
    try {
        const hashPassword = await bcrypt.hash("admin", 10);
        const newUser = new User({
            name: "admin",
            email: "admin@gmaill.com",
            password: hashPassword,
            role: "admin"
        })
        await newUser.save()
    } catch (error) {
        console.log(error)        
    }
}

userRegister();