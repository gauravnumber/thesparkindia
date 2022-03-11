import React from 'react'
import data from "./mock/helpCenterMockData.json";
import { Box, Divider } from '@mui/material';
import '@fontsource/roboto/400.css';


function HelpCenterList(props) {

         //create a new array by filtering the original array
    const filteredData = data.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.text.toLowerCase().includes(props.input)
        }
    })

    return (
        <div>
            {filteredData.map((item) => (
                <div key={item.id}>
                <Box
                 sx={{
                     m:2,
                     fontFamily: "roboto",
                     fontSize: 14,
                     color: "#717171"
                 }}
                >

                {item.text}
                
                </Box>
                <Divider 
                    sx={{
                        mx: 2,
                        bgcolor: "rgba(0, 74, 173, 0.5)",
                        height: 1.5
                    }}
                />
                </div>
            ))}
        
        </div>
            
        
    )
}

export default HelpCenterList;