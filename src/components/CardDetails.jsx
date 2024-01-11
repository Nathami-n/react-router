import React from 'react'
import {Card, CardMedia, CardContent, Typography} from '@mui/material'


const CardDetails = ({product}) => {
    console.log(product)
  return (
    <Card sx={{
        boxShadow:'none',
    }}>
        <CardMedia
        image={product.image}
        sx={{
            height: '250px',
            width: '250px',
        }}
        />

        <CardContent>
            <Typography>
                {product.title}
            </Typography>
            <Typography>
                {product.description}
            </Typography>
        </CardContent>

    </Card>
  )
}

export default CardDetails