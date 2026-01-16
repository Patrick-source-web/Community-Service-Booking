import User from "../model/userModel.js"

export const EmailExist=async(req,res,next)=>{
    const email= req.body
    if(!email){
        return res.status(404).json({message:'email not found'})
    }
    const user = await User.findOne(email)
    if(user){
        return res.status(403).json({message:"User already exist"})
    }else{
        return next()
    }
}