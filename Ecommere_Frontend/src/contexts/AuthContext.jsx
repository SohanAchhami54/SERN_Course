import { createContext, useContext, useState } from "react";
import { Signin } from "../services/auth.js";

const AuthContext=createContext()

export const AuthProvider=({children})=>{
    const[user,setUser]=useState(null)

    const login=async(userData)=>{
        const data= await Signin(userData)
        setUser(data)
        console.log('data of the user is:',data)
         return data
    }
    const logout=()=>{
        setUser('')
    }
    return (
    <AuthContext.Provider value={{user,login,logout}} >
     {children}
    </AuthContext.Provider>
    )
}
export const useAuth=()=>{
    return useContext(AuthContext)
}
