// import { Grid, Menu, Icon, Input, Header } from "semantic-ui-react";
// import Sidebar from "../components/Sidebar";
import { SearchOutlined } from "@mui/icons-material";
import {
  useTheme,
  Typography,
  styled,
  Paper,
  Button,
  Box,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import Img from "@/components/Img";

function Item(props) {
  return (
    <Paper
      sx={{
        // display: "flex",
        // flexDirection: "column",
        // justifyContent: "space-between",
        // backgroundImage: "url('https://source.unsplash.com/393x162')",
        bgcolor: "black",
        color: "#fff",
        borderRadius: 0,
        height: 169,
        p: 3,
      }}
    >
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: (theme) => theme.typography.pxToRem(21.5),
          letterSpacing: "0.04em",
          // pt: (theme) => theme.typography.pxToRem(18.15),
        }}
      >
        {props.item.name}
      </Typography>
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: (theme) => theme.typography.pxToRem(11.59),
          letterSpacing: "0.04em",
          // pt: (theme) => theme.typography.pxToRem(1),
        }}
      >
        {props.item.description}
      </Typography>

      <Button
        sx={{
          // p: 0,
          //  backgroundColor: (theme) => theme.palette.common.white
          color: (theme) => theme.palette.primary.main,
          backgroundColor: (theme) => theme.palette.background.paper,
          fontWeight: 500,
          fontSize: (theme) => theme.typography.pxToRem(11.59),
          letterSpacing: "0.04em",
          mt: 1,
          mb: 2,
        }}
      >
        {props.item.buttonText}
      </Button>
      <br />

      <Img
        // sx={{ mt: 2 }}
        src="https://source.unsplash.com/108x32"
        alt="company logo"
      />
    </Paper>
  );
}

const Home = () => {
  const theme = useTheme();

  var items = [
    {
      name: "Light Bulbs",
      description: "Get Best Deal with Best Quality",
      buttonText: "UP TO 45% OFF*",
    },
    {
      name: "Shoes",
      description: "Get Best Deal with Best Quality",
      buttonText: "UP TO 30% OFF*",
    },
  ];

  return (
    <Box mx={-1}>
      <TextField
        size="small"
        sx={{
          mt: 1,
          px: 1,
          borderRadius: "15px",
          bgcolor: "background.paper",
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton edge="start">
                <SearchOutlined />
              </IconButton>
            </InputAdornment>
          ),
        }}
        fullWidth
      />
      <Img
        src="https://source.unsplash.com/393x67"
        sx={{ mt: 1 }}
        alt="Offers Banner"
      />
      <Carousel
        autoPlay={false}
        indicatorIconButtonProps={{
          style: {
            // padding: "10px", // 1
            color: "blue", // 3
            // color: (theme) => theme.palette.primary.main, // 3
          },
        }}
        indicatorContainerProps={{
          style: {
            // marginTop: (theme) => theme.spacing(-3),
            marginTop: -24, // 5
            // marginTop: (theme) => theme.spacing(3), // 5
            // textAlign: "right", // 4
          },
        }}

        // IndicatorIcon={<Home/>} // Previous Example
        // activeIndicatorIconButtonProps={{
        //     style: {
        //         backgroundColor: 'red' // 2
        //     }
        // }}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </Box>
  );
};

export default Home;
