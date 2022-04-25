import { Box, IconButton, Typography, Divider, Stack, Button, Radio } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import EditIcon from '@mui/icons-material/Edit';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function ProductScan() {
  return (
    <div className="App">
      <Box>
        <IconButton
          sx={{
            position: "absolute",
            width: 43,
            height: 6.5,
            left: 173,
            top: 18,
            color: "#2847A1"
          }}
        >
          <KeyboardArrowDownIcon fontSize="large" />
        </IconButton>
        <Typography
          sx={{
                fontWeight: 400,
                fontSize: 16.2767,
                position: "absolute",
                left: 16,
                top: 46,
          }}
        >
        Product Scan
        </Typography>
        <Typography
          sx={{
                fontWeight: 400,
                fontSize: 14.0856,
                position: "absolute",
                left: 153,
                top: 87,
          }}
        >
           Product identified as
        </Typography>
        <Box
          sx={{
            position: "absolute",
            width: 183,
            height: 38,
            left: 149,
            top: 115,
            bgcolor: "#EFEFEF"
          }}
        >
        <Typography
          sx={{
                fontWeight: 400,
                fontSize: 16.2767,
                position: "absolute",
                left: 9.5,
                top: 7,
          }}
        >
        Computer Mouse
        </Typography>
        <Divider
          sx={{
            width: 130,
            position: "absolute",
            left: 10,
            top: 30,
          }}
         />
         <IconButton
          sx={{
            position: "absolute",
                left: 144,
                color: "#2847A1"
          }}
         >
           <EditIcon fontSize="small"  />
         </IconButton>
        </Box>
        <Typography
          sx={{
                fontWeight: 400,
                fontSize: 14.0856,
                position: "absolute",
                left: 153,
                top: 164,
                color: "#2847A1"
          }}
        >
        View in Categories
        <ArrowForwardIosIcon 
            sx={{
              fontSize: 14.0856,
              ml: 2, 
            }}
         />
        </Typography>
        <Box
          sx={{
            position: "absolute",
                left: 16,
                top: 79,
                borderColor: "#5278E9",
                width: 106,
                height: 105,
                borderStyle: "solid",
                color: "#5278E9"

          }}
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/22/3-Tasten-Maus_Microsoft.jpg" 
            width="100px" height="100px" 
          />
        </Box>
        <Stack direction="row" spacing={2}
            sx={{
              position: "absolute",
              top: 199,
            }}
        >
          <Button variant="text" sx={{color: "#2847A1"}} >Popular</Button>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Button variant="text" sx={{color: "#000000"}} >Latest</Button>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Button variant="text" sx={{color: "#000000"}} >Top Sales</Button>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Button variant="text" sx={{color: "#000000"}} >Price</Button>
        </Stack>
        <Divider 
          sx={{
            width: 90,
            position: "absolute",
            top: 235,
            borderWidth: 2, borderColor: "#2847A1"
          }}
        />
        <Stack direction="row" spacing={2}
            sx={{
              position: "absolute",
              top: 240,
              m: 1
            }}
        >
          <Box
            sx={{
              fontWeight: 400,
              fontSize: 12.5,
              fontFamily: "Roboto",
              bgcolor: "#EFEFEF"
            }}
          >
            <Radio size="small" />
            With Video
          </Box>
          <Box
            sx={{
              fontWeight: 400,
              fontSize: 12.5,
              fontFamily: "Roboto",
              bgcolor: "#EFEFEF",
              display: "flex" ,
              alignItems: "center"
            }}
          >
            With Discount
            <KeyboardArrowDownIcon />
          </Box>
          <Box
            sx={{
              fontWeight: 400,
              fontSize: 12.5,
              fontFamily: "Roboto",
              bgcolor: "#EFEFEF",
              display: "flex" ,
              alignItems: "center"
            }}
          >
            By Category
            <KeyboardArrowDownIcon />
          </Box>
        </Stack>
        <Box
          sx={{
            position: "absolute",
            top: 300
          }}
        >
          <img src="https://images.unsplash.com/photo-1613141411244-0e4ac259d217?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbXB1dGVyJTIwbW91c2V8ZW58MHx8MHx8&w=1000&q=80"
          width="194px" height="145px"  />
          <Typography
            sx={{
              fontSize: 12.0739,
              fontWeight: 400
            }}
          >
          Eroda 630 Mouse with LED li...
          </Typography>
          <Typography
            sx={{
              fontSize: 9.85369,
              fontWeight: 500
            }}
          >
          ₹16,150
          </Typography>
          <Typography
            sx={{
              fontSize: 9.85369,
              fontWeight: 400,
              textDecoration: "line-through",
              color: "#828282",
              position: "absolute",
              left: 47.18,
              top: 167
            }}
          >
           21,150
          </Typography>
          <Typography
            sx={{
              fontSize: 6.742,
              fontWeight: 400,
              color: "#828282",
              position: "absolute",
              left: 80.56,
              top: 169
            }}
          >
           Per item
          </Typography>
          <Typography
            sx={{
              fontSize: 9.85369,
              fontWeight: 400,
              color: "#828282",
            }}
          >
           For 50 units
          </Typography>
          <Typography
            sx={{
              fontSize: 12.2075,
              fontWeight: 400,
              color: "#2847A1",
            }}
          >
           View 4 offers
           <ArrowForwardIosIcon 
            sx={{
              fontSize: 8.2075,
              ml: 1
            }}
         />
          </Typography>
          <IconButton
            sx={{
              position: "absolute",
              left: 154,
              top: 2,
              backgroundColor: "#EFEFEF"
            }}
          >
          <FavoriteBorderIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: 300,
            left: 255
          }}
        >
          <img src="https://images.unsplash.com/photo-1593108408993-58ee9c7825c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGdhbWluZyUyMG1vdXNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          width="194px" height="145px"  />
          <Typography
            sx={{
              fontSize: 12.0739,
              fontWeight: 400
            }}
          >
          Eroda 630 Mouse with LED li...
          </Typography>
          <Typography
            sx={{
              fontSize: 9.85369,
              fontWeight: 500
            }}
          >
          ₹16,150
          </Typography>
          <Typography
            sx={{
              fontSize: 9.85369,
              fontWeight: 400,
              textDecoration: "line-through",
              color: "#828282",
              position: "absolute",
              left: 47.18,
              top: 167
            }}
          >
           21,150
          </Typography>
          <Typography
            sx={{
              fontSize: 6.742,
              fontWeight: 400,
              color: "#828282",
              position: "absolute",
              left: 80.56,
              top: 169
            }}
          >
           Per item
          </Typography>
          <Typography
            sx={{
              fontSize: 9.85369,
              fontWeight: 400,
              color: "#828282",
            }}
          >
           For 50 units
          </Typography>
          <Typography
            sx={{
              fontSize: 12.2075,
              fontWeight: 400,
              color: "#2847A1",
            }}
          >
           View 4 offers
           <ArrowForwardIosIcon 
            sx={{
              fontSize: 8.2075,
              ml: 1
            }}
         />
          </Typography>
          <IconButton
            sx={{
              position: "absolute",
              left: 154,
              top: 2,
              backgroundColor: "#EFEFEF"
            }}
          >
          <FavoriteBorderIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: 520
          }}
        >
          <img src="https://c0.wallpaperflare.com/preview/839/136/850/peripherals-mouse-keyboard-mice.jpg"
          width="194px" height="145px"  />
          <Typography
            sx={{
              fontSize: 12.0739,
              fontWeight: 400
            }}
          >
          Eroda 630 Mouse with LED li...
          </Typography>
          <Typography
            sx={{
              fontSize: 9.85369,
              fontWeight: 500
            }}
          >
          ₹16,150
          </Typography>
          <Typography
            sx={{
              fontSize: 9.85369,
              fontWeight: 400,
              textDecoration: "line-through",
              color: "#828282",
              position: "absolute",
              left: 47.18,
              top: 167
            }}
          >
           21,150
          </Typography>
          <Typography
            sx={{
              fontSize: 6.742,
              fontWeight: 400,
              color: "#828282",
              position: "absolute",
              left: 80.56,
              top: 169
            }}
          >
           Per item
          </Typography>
          <Typography
            sx={{
              fontSize: 9.85369,
              fontWeight: 400,
              color: "#828282",
            }}
          >
           For 50 units
          </Typography>
          <Typography
            sx={{
              fontSize: 12.2075,
              fontWeight: 400,
              color: "#2847A1",
            }}
          >
           View 4 offers
           <ArrowForwardIosIcon 
            sx={{
              fontSize: 8.2075,
              ml: 1
            }}
         />
          </Typography>
          <IconButton
            sx={{
              position: "absolute",
              left: 154,
              top: 2,
              backgroundColor: "#EFEFEF"
            }}
          >
          <FavoriteBorderIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: 520,
            left: 255
          }}
        >
          <img src="https://images.unsplash.com/photo-1551515300-2d3b7bb80920?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcHV0ZXIlMjBtb3VzZXxlbnwwfHwwfHw%3D&w=1000&q=80"
          width="194px" height="145px"  />
          <Typography
            sx={{
              fontSize: 12.0739,
              fontWeight: 400
            }}
          >
          Eroda 630 Mouse with LED li...
          </Typography>
          <Typography
            sx={{
              fontSize: 9.85369,
              fontWeight: 500
            }}
          >
          ₹16,150
          </Typography>
          <Typography
            sx={{
              fontSize: 9.85369,
              fontWeight: 400,
              textDecoration: "line-through",
              color: "#828282",
              position: "absolute",
              left: 47.18,
              top: 167
            }}
          >
           21,150
          </Typography>
          <Typography
            sx={{
              fontSize: 6.742,
              fontWeight: 400,
              color: "#828282",
              position: "absolute",
              left: 80.56,
              top: 169
            }}
          >
           Per item
          </Typography>
          <Typography
            sx={{
              fontSize: 9.85369,
              fontWeight: 400,
              color: "#828282",
            }}
          >
           For 50 units
          </Typography>
          <Typography
            sx={{
              fontSize: 12.2075,
              fontWeight: 400,
              color: "#2847A1",
            }}
          >
           View 4 offers
           <ArrowForwardIosIcon 
            sx={{
              fontSize: 8.2075,
              ml: 1
            }}
         />
          </Typography>
          <IconButton
            sx={{
              position: "absolute",
              left: 154,
              top: 2,
              backgroundColor: "#EFEFEF"
            }}
          >
          <FavoriteBorderIcon />
          </IconButton>
        </Box>
      </Box>
    </div>
  );
}

export default ProductScan;
