// import { useState } from "react";
// import { Icon, Menu, Container } from "semantic-ui-react";
import { CssBaseline, Container, Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import LowBar from "./components/LowBar";
import Header from "./components/Header";

import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Shop from "./pages/Shop";
import Enquiry from "./pages/Enquiry";
import Feed from "./pages/Feed";
import User from "./pages/User";
import Favourites from "./pages/Favourites";
import FavouritePage from "@/pages/FavouritePage";
import Notification from "./pages/Notification";
import RecentlyViewed from "./pages/RecentlyViewed";
import MyOrders from "./pages/MyOrders";
import MyAddress from "./pages/MyAddress";
import PaymentMethod from "./pages/PaymentMethod";
import EditProfile from "./pages/EditProfile";
import MyCart from "./pages/MyCart";
import HelpCenter from "./pages/HelpCenter";


function App() {
  return (
    <Container
      // px={34}
      sx={{
        // paddingX: 0,
        paddingX: 1,
        // margin: 0,
        // backgroundColor: "red",
      }}
    >
      <CssBaseline />
      <Header />
      <Box mt={10} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/enquiry" element={<Enquiry />} />
        {/* <Route path="/feed" element={<Feed />} /> */}
        <Route path="/user" element={<User />} />
        <Route
          path="/favourites"
          // element={<Favourites />}
        >
          <Route index element={<Favourites />} />
          <Route path="led" element={<FavouritePage />} />
        </Route>
        <Route path="/notification" element={<Notification />} />
        <Route path="/recentlyViewed" element={<RecentlyViewed />} />
        <Route path="/myOrders" element={<MyOrders />} />
        <Route path="/myAddress" element={<MyAddress />} />
        <Route path="/paymentMethod" element={<PaymentMethod />} />
        <Route path="/editProfile" element={<EditProfile />} />
        <Route path="/myCart" element={<MyCart />} />
        <Route path="/HelpCenter" element={<HelpCenter />} />
        <Route path="*" element={<h1>404: File Not Found</h1>} />
      </Routes>
      <Box mt={10} />
      <LowBar />
    </Container>
  );
}

export default App;
