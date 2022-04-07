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
import { Box, styled, AppBar as MuiAppBar } from "@mui/material";

const drawerWidth = 240;

const Home = () => {
  const [open, setOpen] = useState(false);

  const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    }),
  );

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  return (
    <Box mx={-1}>
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
    </Box>
  );
};

export default Home;
