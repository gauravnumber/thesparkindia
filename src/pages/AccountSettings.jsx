import React from 'react';

import AccountSettingsList from "./AccountSettingsList";

import { Box, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function AccountSettings() {

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
              Account settings
              </Typography>
          </Box>
          
          <AccountSettingsList />

          <Box>
            <Button variant="outlined"
                sx={{
                  color: "black",
                  borderColor: '#E0E0E0',
                  borderWidth: 2,
                  width: 196,
                  mx: 10,
                  my: 3
                }}
            >
              Logout
            </Button>
          </Box>
          <Typography
                sx={{
                      fontSize: 8,
                      fontFamily: "Roboto",
                      fontWeight: 400,
                      mx: 19,
                      color: "#939393",
                      height: 30,
                      width: 67
                }}
          >
          Spark India v.10
          </Typography>
          
        </Box>

    </div>
  );
}

export default AccountSettings;
