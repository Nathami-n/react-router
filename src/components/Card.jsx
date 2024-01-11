import React, { useEffect, useState } from 'react'
import { Products } from './Products'
import CardDetails from './CardDetails'
import {Stack, Box} from '@mui/material'

const Card = () => {
    const [products, setProducts] = useState([])
    useEffect(()=> {
        let data = []
        Products.map((product)=> {
            data.push(product)
        })
        setProducts(data)
    }, [])
  return (
    
    <Stack  direction='row' gap={4} minHeight='95vh' justifyContent='center' alignItems= 'center' sx={{outline: 'none'}}>
        {products.map((product)=>{
            return <Box key={product.id}><CardDetails product = {product} /></Box>
        })}
    </Stack>
  )
}

export default Card