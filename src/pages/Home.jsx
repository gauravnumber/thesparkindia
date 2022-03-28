import TrendingSearches from "@/components/Home/TrendingSearches";
import TrendingProducts from "@/components/Home/TrendingProducts";
import Categories from "@/components/Home/Categories";
import HotDeals from "@/components/Home/HotDeals";
import LiveStudio from "@/components/Home/LiveStudio";
import Slide from "@/components/Home/Slide";
import Spark from "@/components/Home/Spark";
import Img from "@/components/Img";
import { SearchOutlined } from "@mui/icons-material";
import { Box, IconButton, InputAdornment, TextField } from "@mui/material";

const Home = () => {
  return (
    <Box
      //  mt={-5}
      mx={-1}
    >
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
        src="https://source.unsplash.com/393x67?advertisement,discount"
        sx={{ mt: 1, mb: -1 }}
        alt="Offers Banner"
      />
      <Slide />
      <Spark />
      <HotDeals />
      <LiveStudio />
      <Categories />
      <TrendingSearches />
      <TrendingProducts />
    </Box>
  );
};

export default Home;
