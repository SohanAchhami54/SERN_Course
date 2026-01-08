    import { User } from "../../model/user.js"
    import bcrypt from "bcryptjs"
    const createUser=async(userData)=>{
        try{
            const salt=await bcrypt.genSalt(10)
            const hashedPassword=await bcrypt.hash(userData.password,salt)
        userData.password=hashedPassword
        const user=(await User.create(userData)).toJSON();//convert into the normal js objects.
        const {password,...userWithoutPassword}=user //rest operator 
        return userWithoutPassword;
        }catch(error){
            console.error('Error creating user',error);
        }
    }


    const loginUser=async(email,password)=>{
        try {
            const user=await User.findOne({where:{email}})
            console.log('user:',user)
            if(!user){
            throw new Error('User not found')
            }
            const isPasswordMatch=await bcrypt.compare(password,user.password)
            if(!isPasswordMatch){
                throw new Error('Invalid password')
            }
            const userData=user.toJSON()
            const {password:pwd,...userWithoutPassword}=userData
            return userWithoutPassword
        } catch (error) {
            console.error('Error logging in user.',error)
        }
    }



    export {createUser,loginUser}
