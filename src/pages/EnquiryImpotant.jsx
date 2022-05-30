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
              bgcolor: "#2847A1"
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
                  left: 48,
                  top: 15,
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
                  top: 10
                }}
              >
                <SearchIcon />
              </IconButton>
              <IconButton 
                sx={{
                  color: "#ffffff",
                  position: "absolute",
                  left: 350,
                  top: 10
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
            top: 65
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
                top: 1
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
                top: 1
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
                top: 1
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
              top: 112,
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
              top: 110,
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
              top: 125,
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
              top: 140,
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
              top: 105,
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
              top: 205,
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
              top: 203,
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
              top: 218,
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
              top: 233,
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
              top: 198,
              left: 319,
              color: "#555555"
            }}
          >
            05:00 PM
          </Typography>
      
        </Box>
        {/* box 3 */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            color: "#000000"
          }}
        >
          <Stack direction="row" spacing={5}>
            <Stack>
            <IconButton>
                <HomeOutlinedIcon 
                  sx={{
                    color: "#000000"
                  }}
                />
            </IconButton>
            <Typography
              sx={{
              fontFamily: 'Roboto',
              fontWeight: 600,
              fontSize: 9.16,
              position: "relative",
              left: 8,
              bottom: 8
              }}
            >
                Home
            </Typography>
            </Stack>
            <Stack>
            <IconButton>
                <CategoryOutlinedIcon
                  sx={{
                    color: "#000000"
                  }}
                />
            </IconButton>
            <Typography
              sx={{
              fontFamily: 'Roboto',
              fontWeight: 600,
              fontSize: 9.16,
              position: "relative",
              left: 3,
              bottom: 8
              }}
            >
                Category
            </Typography>
            </Stack>
            <Stack>
            <IconButton>
                <SubscriptionsOutlinedIcon
                  sx={{
                    color: "#000000"
                  }}
                />
            </IconButton>
            <Typography
              sx={{
              fontFamily: 'Roboto',
              fontWeight: 600,
              fontSize: 9.16,
              position: "relative",
              left: 6,
              bottom: 8
              }}
            >
                Studio
            </Typography>
            </Stack>
            <Stack>
            <IconButton>
                <BubbleChartOutlinedIcon
                  sx={{
                    color: "#2847A1"
                  }}
                />
            </IconButton>
            <Typography
              sx={{
              fontFamily: 'Roboto',
              fontWeight: 600,
              fontSize: 9.16,
              position: "relative",
              left: 6,
              bottom: 8,
              color: "#2847A1"
              }}
            >
                Enquiry
            </Typography>
            </Stack>
            <Stack>
            <IconButton>
                <AccountCircleOutlinedIcon
                  sx={{
                    color: "#000000"
                  }}
                />
            </IconButton>
            <Typography
              sx={{
              fontFamily: 'Roboto',
              fontWeight: 600,
              fontSize: 9.16,
              position: "relative",
              left: 12,
              bottom: 8
              }}
            >
                Me
            </Typography>
            </Stack>
          </Stack>
        </Box>
    </div>
  );
}

export default Eimp;
