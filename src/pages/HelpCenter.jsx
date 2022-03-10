import {useState} from "react";

import HelpCenterList from "./HelpCenterList";

import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { SearchOutlined } from "@mui/icons-material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import '@fontsource/roboto/500.css';


function HelpCenter() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  
  return (
    <div className="App">
      <Box
       sx={{
        width: 360,
        height: 907,
        background: "#FFFFFF"
       }}
      >
      <Box
          sx={{
            width: 1/2,
            fontFamily: "roboto",
            fontSize: 19,
            color: "#223263"
                     
          }}
        >
        <Typography variant="h5" component="h1" >
        <IconButton edge="start"
         sx={{
           mx: 1,
           color: "#223263"
         }}
        >
          <ArrowBackIcon /> 
        </IconButton>
        Help center
         </Typography>
        </Box>
           
    
       <Box>
       <Paper elevation={4}
        sx={{
          height: 55,
          borderRadius: 25,
          m: 2
        }}
       >
       <TextField
        size="small" variant="outlined" onChange={inputHandler}

          sx={{
          
           width: "90%",
           mx: 2,
           my: 1.2,
           height: 35,
           border: 1,
           borderRadius: 25,
           bgcolor: "background.paper",
           borderColor: "GrayText"
          }}
           InputProps={{

          startAdornment: (
            <InputAdornment position="start">
              <IconButton edge="start">
                <SearchOutlined
                 sx={{
                   color: "black"
                 }}
                 />
              </IconButton>
            </InputAdornment>
          ),
        }}
        
       />
         
        
    </Paper>
       </Box>
 
    <List input={inputText} 
      sx={{
        ml: 2
      }}

     />
    
      
      </Box>
      
    </div>
   
     
   
  );
}

export default HelpCenter;
