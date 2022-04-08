import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Typography from '@mui/material/Typography';
import ChatIcon from '@mui/icons-material/Chat';


export default function Header() {
  return (
    <div className='Header'>
        <a href='/'><span><ArrowBackIcon sx={{margin: 1.5, color: "#2847A1"}}/></span></a>
        <Typography variant='h5' component='h2' sx={{marginTop: 1.5}}>
            Scan and Shop 
        </Typography>
        <a href = "/"><span><ChatIcon sx={{marginTop: 1.5,marginLeft: 18,color: "black"}}/></span></a>
    </div>
  )
}
