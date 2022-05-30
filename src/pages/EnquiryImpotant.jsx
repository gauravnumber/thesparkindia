import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BubbleChartOutlinedIcon from '@mui/icons-material/BubbleChartOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';

function Eimp() {
  return (
    <div className="App">
        <Box>
          <Stack direction="row"
            sx={{
              height: 45,
              width: 390,
              bgcolor: "#2847A1",
              position: "absolute",
              left: 0,
              top: 50
            }}
          >
              <IconButton
                sx={{
                  color: "white"
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                sx={{
                  position: "absolute",
                  left: 40,
                  top: 8,
                  color: "#FFFFFF",
                  fontFamily: 'Roboto',
                  fontWeight: 600,
                  fontSize: 19.4465
                }}
              >
              Enquiry
              </Typography>
              <IconButton 
                sx={{
                  color: "#ffffff",
                  position: "absolute",
                  left: 320,
                  top: 3
                }}
              >
                <SearchIcon />
              </IconButton>
              <IconButton 
                sx={{
                  color: "#ffffff",
                  position: "absolute",
                  left: 350,
                  top: 3
                }}
              >
                <MoreVertIcon />
              </IconButton>
          </Stack>
        </Box>
        {/* fist box */}
        <Box>
         <Stack direction="row" spacing={12}
          sx={{
            width: 390,
            position: "absolute",
            left: 20,
            top: 95
          }}
         >
            <Typography
              sx={{
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: 16,
              }}
            >
            Recent
            <FiberManualRecordIcon 
              sx={{
                fontSize: 8,
                color: "#D90000",
                position: "absolute",
                top: 5
              }}
            />
            </Typography>
            
            <Typography
              sx={{
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: 16,
                color: "#D90000"
              }}
            >
            Important
            <FiberManualRecordIcon 
              sx={{
                fontSize: 8,
                color: "#D90000",
                position: "absolute",
                top: 5
              }}
            />
            <Divider 
              sx={{
                bgcolor: "#D90000",
                height: 1.5
              }}
            />
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: 16
              }}
            >
            Orders
            <FiberManualRecordIcon 
              sx={{
                fontSize: 8,
                color: "#D90000",
                position: "absolute",
                top: 5
              }}
            />
            </Typography>
         </Stack>
        </Box>
        {/* second box */}
        <Box>
          <Box
            sx={{
              width: 46,
              height: 46,
              position: "absolute",
              left: 16,
              top: 132,
            }}
          >
            <img src="https://www.cmswire.com/-/media/9cd5da57ceda4264a2b76b8c20e7a8e4.ashx?mw=640&mh=480" width="46" height="46" />

          </Box>
          <Typography
            sx={{
              fontFamily: 'Inter',
              fontWeight: 700,
              fontSize: 14,
              position: "absolute",
              top: 128,
              left: 78
            }}
          >
          SPARX
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Inter',
              fontWeight: 600,
              fontSize: 16,
              position: "absolute",
              top: 140,
              left: 78
            }}
          >
          Acer Nitro 27 inch WQHD with ...
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: 16,
              position: "absolute",
              top: 158,
              left: 78,
              color: "#555555"
            }}
          >
          Must have been a mouse monitor ...
          </Typography>
          <Typography
             sx={{
              fontFamily: 'Inter',
              fontWeight: 600,
              fontSize: 12,
              position: "absolute",
              top: 125,
              left: 319,
              color: "#555555"
            }}
          >
            10:00 PM
          </Typography>
            
        </Box>
        <Box>
          <Box
            sx={{
              width: 46,
              height: 46,
              position: "absolute",
              left: 16,
              top: 202,
            }}
          >
            <img src="https://d68b3152cf5d08c2f050-97c828cc9502c69ac5af7576c62d48d6.ssl.cf3.rackcdn.com/includes/img/cms/site-images/resized/b495a5e4f80-kingston-university-0c0ae6b8b2f-.jpg" width="46" height="46" />

          </Box>
          <Typography
            sx={{
              fontFamily: 'Inter',
              fontWeight: 700,
              fontSize: 14,
              position: "absolute",
              top: 200,
              left: 78
            }}
          >
          SPARX
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Inter',
              fontWeight: 600,
              fontSize: 16,
              position: "absolute",
              top: 212,
              left: 78
            }}
          >
          Acer Nitro 27 inch WQHD with ...
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: 16,
              position: "absolute",
              top: 230,
              left: 78,
              color: "#555555"
            }}
          >
          Must have been a mouse monitor ...
          </Typography>
          <Typography
             sx={{
              fontFamily: 'Inter',
              fontWeight: 600,
              fontSize: 12,
              position: "absolute",
              top: 203,
              left: 319,
              color: "#555555"
            }}
          >
            05:00 PM
          </Typography>
      
        </Box>
        
    </div>
  );
}

export default Eimp;
