const Signin=async(userData)=>{
   const response=await fetch (`${import.meta.env.VITE_API_URL}/auth/login`,{
    method:'POST',
    headers:{
        'Content-Type':'application/json',
    },
    credentials:'include',
    body:JSON.stringify(userData)
   });
   const data= await response.json()
   if(!response.ok){
     throw new Error(data.message || 'Failed to Sign in')
   }
   return data.data
   
}


const  SignUpApi=async(userData)=>{
  const response=await fetch (`${import.meta.env.VITE_API_URL}/auth/signup`,{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    credentials:'include',
    body:JSON.stringify(userData)
  })
  const data=await response.json()
  if(!response.ok){
    throw new Error(data.message || 'Failed to Sign Up')
  }
  return data.data
}

export {Signin,SignUpApi}