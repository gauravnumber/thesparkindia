
import React from 'react';

import { Box, Divider} from '@mui/material';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CreateIcon from '@mui/icons-material/Create';

function AccountInformation() {

  return (
    <div>
         <Box
            sx={{
              width: 360,
              height: 907,
              background: "#FFFFFF"
            }}
          >
            <Box>
          <Typography 
              sx={{
                                color: "#223263",
                                fontFamily: "Roboto",
                                position: "relative",
                                fontSize: 22,
                                fontWeight: 500,
                                height: 22,
                                my: 3
                                
                            }}
          >
              <IconButton edge="start"
              sx={{
                mx: 1,
                color: "#223263"
              }}
              >
                <ArrowBackIcon /> 
              </IconButton>
              Account information
              <IconButton edge="end"
              sx={{
                mx: 1,
                color: "#223263",
                position: "absolute",
                right: 0
              }}
              >
                <CreateIcon color="action" />
              </IconButton>
              </Typography>
          </Box>
          <Divider 
                    sx={{
                        height: 2
                    }}
          />
          <Box>
            <Typography 
              sx={{
                                color: "#000000",
                                fontFamily: "Roboto",
                                fontSize: 15,
                                m: 2
                            }}
          >
              User name
            </Typography>
            <Typography 
              sx={{
                                fontFamily: "Roboto",
                                fontSize: 9,
                                m: 2,
                                color: "rgba(0, 0, 0, 0.7)"
                            }}
          >
              Sparkindia
            </Typography>
            <Typography 
              sx={{
                                color: "#000000",
                                fontFamily: "Roboto",
                                fontSize: 15,
                                m: 2
                            }}
          >
             Phone
            </Typography>
            <Typography 
              sx={{
                                fontFamily: "Roboto",
                                fontSize: 9,
                                m: 2,
                                color: "rgba(0, 0, 0, 0.7)"
                            }}
          >
              9657869764761
            </Typography>
            <Typography 
              sx={{
                                color: "#000000",
                                fontFamily: "Roboto",
                                fontSize: 15,
                                m: 2
                            }}
          >
             Email address
            </Typography>
            <Typography 
              sx={{
                                fontFamily: "Roboto",
                                fontSize: 9,
                                m: 2,
                                color: "rgba(0, 0, 0, 0.7)"
                            }}
          >
              asafgaf@gmail.com
            </Typography>
            <Typography 
              sx={{
                                color: "#000000",
                                fontFamily: "Roboto",
                                fontSize: 15,
                                m: 2
                            }}
          >
             Country
            </Typography>
            <Typography 
              sx={{
                                fontFamily: "Roboto",
                                fontSize: 9,
                                m: 2,
                                color: "rgba(0, 0, 0, 0.7)"
                            }}
          >
              India
            </Typography>
          </Box>
         </Box>
    </div>
  );
}

export default AccountInformation;
