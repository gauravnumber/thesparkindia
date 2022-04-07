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
import {
  Menu as MenuIcon,
  Notifications,
  QrCode,
  ShoppingCartOutlined,
  Close,
} from "@mui/icons-material";
import {
  AppBar as MuiAppBar,
  Box,
  Drawer,
  IconButton,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

// const drawerWidth = 0;
const drawerWidth = 240;

const Home = () => {
  const [open, setOpen] = useState(false);

  const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
      // flexGrow: 1,
      // padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      // marginLeft: `-${drawerWidth}px`,
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
    <Box
      //  mt={-5}
      mx={-1}
    >
      <AppBar
        position="fixed"
        open={open}
        sx={{
          // color: "primary.blue",
          // backgroundColor: (theme) => theme.palette.background.paper,
          height: 40,
          // boxShadow: (theme) => theme.shadows[1],
          "& .MuiToolbar-root": {
            minHeight: 40,
          },
          boxShadow: "unset",
          backgroundColor: "primary.blue2",
          color: "#fff",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          {/* <IconButton color="inherit" edge="start">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" noWrap component="div">
            SPARK INDIA
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <>
            <IconButton
              color="inherit"
              size="large"
              component={Link}
              to="/scan-and-buy"
            >
              <QrCode />
            </IconButton>
            <IconButton
              color="inherit"
              size="large"
              component={Link}
              to="/notification"
            >
              <Notifications />
            </IconButton>
          </>
          <IconButton
            color="inherit"
            size="large"
            component={Link}
            to="/my-cart"
          >
            <ShoppingCartOutlined />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <IconButton
          color="inherit"
          aria-label="close drawer"
          onClick={handleDrawerClose}
          // edge="start"
          // sx={{ mr: 2, ...(open && { display: "none" }) }}
        >
          <Close />
        </IconButton>
      </Drawer>
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
