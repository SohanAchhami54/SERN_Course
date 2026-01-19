import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
    const [form,setForm]=useState({
        email:'',
        password:''
    })
    const [isLoading,setIsLoading]=useState(null)
    const [error,setError]=useState(false)
   const {login}=useAuth()

   const navigate=useNavigate()
    const handleSubmit=async(e)=>{
      e.preventDefault()
      if(!form.email || !form.password) return null
      setIsLoading(true)
      setError(null)
      try{
       const data= await login(form)
        data.type==='vendor'? navigate('/vendor'):navigate('/')
        
      }catch(error){
        console.error('Failed to sign in, please check your credentials')
      }
    }
    
  return (
    <>
   <div className="flex justify-center items-center min-h-screen bg-gray-100">
  <div className="bg-white p-8 rounded-lg shadow-md w-96">
    <h1 className="text-center text-4xl font-bold mb-6">Sign In</h1>

    {error && (
      <p className="text-red-500 text-center mb-4">Error: {error}</p>
    )}

    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4"
    >
      {/* Email */}
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Password */}
      <input
        type="password"
        placeholder="Enter your password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        className="border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="bg-blue-500 text-white py-2 rounded-md text-xl hover:bg-blue-600 transition-colors mt-2"
      >
        {isLoading ? "Signing In..." : "Sign In"}
      </button>
    </form>
  </div>
</div>

    </>
  )
}

export default SignIn
