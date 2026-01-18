import React, { useEffect, useState } from 'react'
import {getProductList} from '../services/productApi.js'
const ProductList = () => {
  const [product, setProduct] = useState([])
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState(null)
 
  
  useEffect(() => {
    const fetchProducts=async ()=>{
      try{
      const data= await getProductList()
         console.log('productdata:',data)
      setProduct(data)
    }catch(error){
      setError(error.message)
    }finally {
      setLoading(false)
    }
    }
    fetchProducts()
  }, [])
if(loading) return <div> Loading...</div>

  if (error) return <div>Error:{error}</div>
  

  return (
    <div>
      <h1>ProductList</h1>
    </div>
  )
}

export default ProductList
