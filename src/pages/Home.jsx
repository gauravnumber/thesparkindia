// import { Grid, Menu, Icon, Input, Header } from "semantic-ui-react";
// import Sidebar from "../components/Sidebar";
import { SearchOutlined } from "@mui/icons-material";
import {
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
        backgroundImage: "url('https://source.unsplash.com/393x162')",
        color: "#fff",
      }}
    >
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}

const Home = () => {
  var items = [
    {
      name: "Light Bulbs",
      description: "Get Best Deal with Best Quality",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];

  return (
    <Box mx={-1}>
      <TextField
        size="small"
        sx={{
          // width: "20ch",
          // borderRadius: "50%",
          mt: 1,
          px: 1,
          // mx: 1,
          // mr: 2,
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
      <Img src="https://source.unsplash.com/393x67" sx={{ mt: 1 }} />
      <Carousel
        // sx={{
        //   backgroundImage: "https://source.unsplash.com/393x162",
        // }}
        autoPlay={false}
        // fullHeightHover={false}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </Box>
  );
};

export default Home;
