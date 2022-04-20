import Main from "@/components/Home/Main";
import AppBarHeaderAndDrawer from "@/components/Home/AppBarHeaderAndDrawer";
import BackToTop from "@/components/Home/BackToTop";
import Categories from "@/components/Home/Categories";
import FloatButton from "@/components/Home/FloatButton";
import HotDeals from "@/components/Home/HotDeals";
import LiveStudio from "@/components/Home/LiveStudio";
import RecentlyViewedProducts from "@/components/Home/RecentlyViewedProducts";
import Recommended from "@/components/Home/Recommended";
import SearchBar from "@/components/Home/SearchBar";
import Slide from "@/components/Home/Slide";
import Spark from "@/components/Home/Spark";
import SparkFeatures from "@/components/Home/SparkFeatures";
import Sponsored from "@/components/Home/Sponsored";
import TopSellingBrands from "@/components/Home/TopSellingBrands";
import TrendingProducts from "@/components/Home/TrendingProducts";
import TrendingSearches from "@/components/Home/TrendingSearches";
import Img from "@/components/Img";
import { Box, styled } from "@mui/material";

const Home = () => {
  return (
    <Box
      //  mt={-5}
      mx={-1}
      // display="flex"
      // in <Main> uncomment -drawerWidth
    >
      <AppBarHeaderAndDrawer />
      <Main open={open}>
        <SearchBar />
        <Img
          src="https://source.unsplash.com/393x67?advertisement,discount"
          sx={{ mt: 0, mb: -1 }}
          alt="Offers Banner"
        />
        <Slide />
        <Spark />
        <HotDeals />
        <LiveStudio />
        <Categories />
        <TrendingSearches />
        <TrendingProducts />
        <Sponsored />
        <SparkFeatures />
        <Recommended />
        <TopSellingBrands />
        <RecentlyViewedProducts />
        <BackToTop />
        <FloatButton />
      </Main>
    </Box>
  );
};

export default Home;
