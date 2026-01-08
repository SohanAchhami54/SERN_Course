import { createUser, loginUser } from "../../services/user/index.js";

//this is for the signup
const signUpController=async(req,res)=>{
    const {name,email,password,type}=req.body;
    const user=await createUser({name,email,password,type})
    res.status(200).json({success:true,message:'User Signed Up',data:user})
}

//this is the login 
const loginController=async(req,res)=>{
   const {email,password}=req.body;
   const user=  await loginUser(email,password)
    res.status(200).json({success:true,message:'User logged in',data:user})
}

export {signUpController,loginController}


