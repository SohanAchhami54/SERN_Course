import { createProduct } from "../../services/products/index.js"
import { httpError } from "../../utils/httpError.js"

const createProductController=async(req,res)=>{
    const {name,description,price,categories,image}=req.body 
    if(!name || !price){
        return next(httpError('Name and price are required',400))
    }
    const product= await createProduct({name,description,price,categories,image,vendorid:req.user.id})
    res.status(200).json({success:true,message:'Product created successfully',data:product})

}
export {createProductController}