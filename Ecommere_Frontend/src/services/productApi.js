const APP_URL = import.meta.env.VITE_API_URL
const getProductList=async()=>{
    try{
        const response= await fetch(`${APP_URL}/products`)
        // const response=await fetch('http://localhost:8000/products')
        const data= await response.json()
        return data
        
    }catch(error){
        console.error('Error occur',error)
    }
}

export {getProductList}