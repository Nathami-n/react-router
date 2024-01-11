import React from 'react'
import {Card, CardMedia, CardContent, Typography} from '@mui/material'


const CardDetails = ({product}) => {
    console.log(product)
  return (
    <Card sx={{
        boxShadow:'none',
        display:'flex',
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        <CardMedia
        image={product.image}
        sx={{  
            height: '250px',
            width: '250px',
        }}
        />

        <CardContent sx={{
            mt: {xs: 0, md: '-20px'}
        }}>
            <Typography variant='h3'>
                {product.title}
            </Typography>
            <Typography sx={{
                fontFamily:'cursive'
            }}>
                {product.description}
            </Typography>
        </CardContent>

    </Card>
  )
}

export default CardDetails