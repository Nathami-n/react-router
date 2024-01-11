import React from 'react'
import { Products } from './Products';
import { useParams } from 'react-router-dom';
import CardDetails from './CardDetails';

const ProductDetail = () => {
    let {id} = useParams()
    console.log(id);
    const productWithId = Products.find((product)=> {
        return product.id === parseInt(id);
    })
    console.log(productWithId)
  return (
    <CardDetails product={productWithId}/>
  )
}

export default ProductDetail