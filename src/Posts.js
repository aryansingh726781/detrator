import React, { useState,useEffect } from 'react'
import axios from 'axios';
import './App.css';


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

export const Posts = () => {
    const [fake,setFake]=useState([])
console.log(fake)

//  useEffect = (() => {
//     fakestore();
//  })
    async function fakestore (){

       const result=await axios.get(`https://fakestoreapi.com/products/`)
       console.log(result.data)
       setFake(result.data)
        
    }
    fakestore();
    
  return (
    <div >
          {fake.map((values)=>(  
        <div  > 
           <Card sx={{ textAlign:"center", backgroundColor:"silver", height:800, maxWidth: 400,float:'left',margin:2}}>
      <CardActionArea >

      <CardMedia
          component="img"
          height="500"
          
          image={values.image}
          alt="green iguana"
          
         
        />
      <Typography gutterBottom variant="h5" component="div">
            {values.category}
          </Typography>

          <Typography variant="body2" color="text.secondary">
{values.description}
          </Typography>

       
        <CardContent>
        <Typography gutterBottom variant="h6" component="div" >
         price:{values.price}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            rating:{values.rating.rate}/5
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {values.title}
          </Typography>
          <Button variant="contained" color="primary" startIcon={<DeleteIcon />} >Contained</Button>


          
        </CardContent>
      </CardActionArea>
    </Card>
           
        </div>
        

    ))}
     

    </div>
  
  )
}
