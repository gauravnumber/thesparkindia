// import { Grid, Menu, Icon, Input, Header } from "semantic-ui-react";
// import Sidebar from "../components/Sidebar";
import Img from "@/components/Img";
import Slide from "@/components/Slide";
import { SearchOutlined } from "@mui/icons-material";
import {
  GlobalStyles,
  Box,
  IconButton,
  InputAdornment,
  TextField,
  useTheme,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";

const Home = () => {
  const theme = useTheme();

  var items = [
    {
      name: "Light Bulbs",
      description: "Get Best Deal with Best Quality",
      buttonText: "UP TO 45% OFF*",
      companyName: "Sindhu Pvt.",
    },
    {
      name: "Shoes",
      description: "Get Best Deal with Best Quality",
      buttonText: "UP TO 30% OFF*",
      companyName: "Mindhu Pvt.",
    },
    {
      name: "LED",
      description: "Get Best Deal with Best Quality and Quantity",
      buttonText: "UP TO 35% OFF*",
      companyName: "Bindhu Pvt.",
    },
    {
      name: "Phone",
      description: "Get Best Deal with Great Best Quality",
      buttonText: "UP TO 40% OFF*",
      companyName: "Aindhu Pvt.",
    },
    {
      name: "TV",
      description: "Get Best Deal with Big TV",
      buttonText: "UP TO 25% OFF*",
      companyName: "Rindhu Pvt.",
    },
  ];

  return (
    <Box
      //  mt={-5}
      mx={-1}
    >
      <GlobalStyles
        styles={{
          body: {
            // backgroundColor: "#223263",
            // backgroundColor: (theme) => theme.palette.primary.blue,
            // backgroundColor: "primary.blue",
          },
        }}
      />
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
        sx={{ mt: 1, mb: -1 }}
        alt="Offers Banner"
      />
      <Carousel
        autoPlay={false}
        indicators={false}
        // indicatorIconButtonProps={{
        //   style: {
        //     // padding: "10px", // 1
        //     color: "blue", // 3
        //   },
        // }}
        // indicatorContainerProps={{
        //   style: {
        //     marginTop: -24, // 5
        //   },
        // }}
        // IndicatorIcon={<Home/>} // Previous Example
        // activeIndicatorIconButtonProps={{
        //   style: {
        //     backgroundColor: "red", // 2
        //   },
        // }}
      >
        {items.map((item, i) => (
          <Slide key={i} item={item} />
        ))}
      </Carousel>
    </Box>
  );
};

export default Home;
