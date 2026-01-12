import { Product } from "../../model/products.js"

const createProduct=async(productData)=>{
    try{
        const product=await Product.create({...productData})
        return product 
    }catch(error){
        console.error('Error creating user',error)
    }
}
export {createProduct}