import React, { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react'

const Products = () => {
const [products,setProducts]=useState([])
    const getProducts=async()=>{
        try{
            const {data}=await axios.get("https://fakestoreapi.com/products")
            setProducts(data)
        }catch(err){
            console.log(err);
        }
    }
   
useEffect(() => {
    getProducts()
}, [])


console.log(products)
  return (
    <div>
        {
            products?.map((item)=>{
                return(
                    <div key={item.id} className="flex items-center max-w-[50rem] m-auto text-2xl gap-x-4 my-4">
                        <img src={item.image} alt={item.title} className="w-4/12 h-[300px] img"/>
                        <h2 className="w-6/12 truncate">{item.title}</h2>
                        <h1 className="w-2/12 text-right">${item.price}</h1>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Products