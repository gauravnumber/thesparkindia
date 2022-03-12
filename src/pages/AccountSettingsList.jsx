import React from 'react'
import { Box, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';

function AccountSettingsList(props) {

    return (
        <div>
           
                <Box
                    sx={{
                        position: "relative"
                    }}
                >
                            <Typography
                                sx={{
                                    height: 30,
                                    ml: 2,
                                    backgroundColor: "#F4F4F4",
                                    color: "#223263",
                                    fontFamily: "Roboto"
                                }}
                            >
                            My Account
                            </Typography>
                               
                                <Typography variant="h6" component="h3"
                                    sx={{
                                        m:2,
                                        color: "#000000"
                                    }}
                                >
                            Help center
                                 <IconButton
                                   sx={{ position: "absolute",
                                        right: 0 }}
                                 >
                                    <ChevronRightIcon />
                                </IconButton>
                            </Typography>
                            
                            <Typography variant="h6" component="h3"
                                    sx={{
                                        m:2,
                                        color: "#000000"
                                    }}
                                >
                            My Adfdresses
                                 <IconButton
                                   sx={{ position: "absolute",
                                        right: 0 }}
                                 >
                                    <ChevronRightIcon />
                                </IconButton>
                            </Typography>

                            <Typography variant="h6" component="h3"
                                    sx={{
                                        m:2,
                                        color: "#000000"
                                    }}
                                >
                            Bank Accounts/Cards
                                 <IconButton
                                   sx={{ position: "absolute",
                                        right: 0 }}
                                 >
                                    <ChevronRightIcon />
                                </IconButton>
                            </Typography>

                            <Typography
                                sx={{
                                    height: 30,
                                    ml: 2,
                                    backgroundColor: "#F4F4F4",
                                    color: "#223263",
                                    fontFamily: "Roboto"
                                }}
                            >
                            Meassage
                            </Typography>
                               
                                <Typography variant="h6" component="h3"
                                    sx={{
                                        m:2,
                                        color: "#000000"
                                    }}
                                >
                            Chart settings
                                 <IconButton
                                   sx={{ position: "absolute",
                                        right: 0 }}
                                 >
                                    <ChevronRightIcon />
                                </IconButton>
                            </Typography>
                            
                            <Typography variant="h6" component="h3"
                                    sx={{
                                        m:2,
                                        color: "#000000"
                                    }}
                                >
                           Notification settings
                                 <IconButton
                                   sx={{ position: "absolute",
                                        right: 0 }}
                                 >
                                    <ChevronRightIcon />
                                </IconButton>
                            </Typography>

                            <Typography variant="h6" component="h3"
                                    sx={{
                                        m:2,
                                        color: "#000000"
                                    }}
                                >
                           Privecy settings
                                 <IconButton
                                   sx={{ position: "absolute",
                                        right: 0 }}
                                 >
                                    <ChevronRightIcon />
                                </IconButton>
                            </Typography>

                            <Typography variant="h6" component="h3"
                                    sx={{
                                        m:2,
                                        color: "#000000"
                                    }}
                                >
                           Blocked Users
                                 <IconButton
                                   sx={{ position: "absolute",
                                        right: 0 }}
                                 >
                                    <ChevronRightIcon />
                                </IconButton>
                            </Typography>

                            <Typography variant="h6" component="h3"
                                    sx={{
                                        m:2,
                                        color: "#000000"
                                    }}
                                >
                           Language
                                 <IconButton
                                   sx={{ position: "absolute",
                                        right: 0 }}
                                 >
                                    <ChevronRightIcon />
                                </IconButton>
                            </Typography>

                            <Typography
                                sx={{
                                    height: 30,
                                    ml: 2,
                                    backgroundColor: "#F4F4F4",
                                    color: "#223263",
                                    fontFamily: "Roboto"
                                }}
                                >
                            Support
                            </Typography>
                               
                                <Typography variant="h6" component="h3"
                                    sx={{
                                        m:2,
                                        color: "#000000"
                                    }}
                                >
                           Help center
                                 <IconButton
                                   sx={{ position: "absolute",
                                        right: 0 }}
                                 >
                                    <ChevronRightIcon />
                                </IconButton>
                            </Typography>
                            
                            <Typography variant="h6" component="h3"
                                    sx={{
                                        m:2,
                                        color: "#000000"
                                    }}
                                >
                           Terms and Conditions
                                 <IconButton
                                   sx={{ position: "absolute",
                                        right: 0 }}
                                 >
                                    <ChevronRightIcon />
                                </IconButton>
                            </Typography>

                            <Typography variant="h6" component="h3"
                                    sx={{
                                        m:2,
                                        color: "#000000"
                                    }}
                                >
                           Rate us
                                 <IconButton
                                   sx={{ position: "absolute",
                                        right: 0 }}
                                 >
                                    <ChevronRightIcon />
                                </IconButton>
                            </Typography>

                            <Typography variant="h6" component="h3"
                                    sx={{
                                        m:2,
                                        color: "#000000"
                                    }}
                                >
                           Account Deletion
                                 <IconButton
                                   sx={{ position: "absolute",
                                        right: 0 }}
                                 >
                                    <ChevronRightIcon />
                                </IconButton>
                            </Typography>

                </Box> 
            
        </div>

    )
}

export default AccountSettingsList;