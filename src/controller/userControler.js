// const controller = ()=>{
// console.log("Router connected succesfully!!")
// }

// export default controller;

//The above codes were for checking if it it is working.

 import User from "../model/userModel.js"
 import bcrypt from "bcrypt"
 import jwt from "jsonwebtoken"

class Controller{

    static signup =async (req,res)=>{
        const{names,email,password,role}=req.body
        const hashPassword = bcrypt.hashSync(req.body.password,10)
        try{
        const user = await User.create({names,email,password:hashPassword,role})

        if(!user){
            return res.status(404).json({message:"user creation failed"})
        }else{
            return res.status(201).json({message:"user creation succefully",user})
        }

    }catch(error){
        console.log(error)
        return res.status(500).json({message:"create user failed"})
    
}
}

static login = async (req, res)=>{
    const {email,password} = req.body
    const user = await User.findOne({email})
    if(!user){
        return res.status(404).json({message:"Invalid email"})
    }else{
        const comparePassword = bcrypt.compareSync(password, user.password)
        if(!comparePassword){
            return res.status(404).json({message:"Invalid password"})
        }else{
            const token = jwt.sign({user:user},process.env.SCRET_Key,{expiresIn:"5h"})
            return res.status(201).json({message:"LoggedIn Successfully!!",token})
        }
    }
}

static getAllUser = async(req, res)=>{
    const users = await User.find()
    if(!users){
        return res.status(404).json({message:"User not found!!"})
    }else{
        return res.status(200).json({message:"User found successfully!!",users})
    }
}

}
export default Controller