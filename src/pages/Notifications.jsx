import { Box, Stack, Typography, Button, Divider } from "@mui/material";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Notifications() {
  return (
    <div className="App">
     <Box
        sx={{
          bgColor: "#E5E5E5",
        }}
      >
          <Box
                sx={{
                       position: "absolute",
                       bgcolor: "#FFFFFF",
                       width: 1,
                       top: 0
                }}
          >
                <Stack direction="row" spacing={15}
                    sx={{
                        mt: 10,
                        ml: 2
                    }}
            >
                <NotificationsNoneOutlinedIcon fontSize="large" color="primary"  />
                <DiscountOutlinedIcon fontSize="large" color="primary"  />
                <ShoppingCartOutlinedIcon fontSize="large" color="primary"  />
            </Stack>
            <Box
                sx={{
                  position: "relative",
                  fontFamily: 'Roboto',
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 14,
                  letterSpacing: 0.15,
                  right: 11,
                  ml: 1
                }}
            >
                <Button variant="text"
                    sx={{
                      color: "#000000",
                      mt: 2
                    }}
                >
                    All
                </Button>
                <Button variant="text"
                    sx={{
                      color: "#000000",
                      mt: 2,
                      ml: 12
                    }}
                >
                  Offers
                </Button>
                <Button variant="text"
                    sx={{
                      mt: 2,
                      ml: 11,
                      color: "#004AAD"
                    }}
                >
                  Orders
                </Button>
            </Box>
          </Box>
          <Divider 
            sx={{
              position: "absolute",
              width: 94,
              left: 305,
              top: 165,
              borderWidth: 2,
              borderColor: "#004AAD",
              borderRadius: 8
            }}
          />
        
        <Box
            sx={{
              fontFamily: 'Roboto',
              fontStyle: "normal",
              bgcolor: "#FFFFFF",
              position: "absolute",
              top: 174,
              width: 1
            }}
        >
          <Typography
              sx={{
                fontWeight: 500,
                fontSize: 14,
                m: 1
              }}
          >
              Product Shipped
              <CheckCircleIcon  color="primary" 
                sx={{
                  position: "relative",
                  left: 10,
                  top: 6
                }}
              />
          </Typography>
          <Typography
              sx={{
                fontWeight: 400,
                fontSize: 11,
                width: 210,
                m: 1
              }}
          >
              Your Package contains color led bulb has 
              been shipped and will be delivered soon!
          </Typography>
          <Button variant="text"
              sx={{
                  bgColor: "#F2F2F299",
                  opacity: 0.6,
                  fontWeight: 500,
                  fontSize: 9,
                  ml: 1
              }}
          >
              Track your package 
              <ArrowForwardIosIcon  fontSize="small" 
                sx={{
                  ml: 2
                }}
              />
          </Button>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: 9,
              ml: 1
            }}
          >
            5 minutes ago
          </Typography>
        </Box>
        <Box
            sx={{
              width: 91,
              height: 92,
              position: "absolute",
              left: 307,
              top: 185
            }}
        >
          <img src="https://insights.ehotelier.com/wp-content/uploads/sites/6/2021/12/20211201-Hotel-marketing-trends.png"
               alt="light bulb" width="91px" height="92p" />
        </Box>
      </Box>
    </div>
  );
}

export default Notifications;
