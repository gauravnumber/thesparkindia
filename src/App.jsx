// import { useState } from "react";
// import { Icon, Menu, Container } from "semantic-ui-react";
import { CssBaseline, Container, Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import LowBar from "./components/LowBar";
import Header from "./components/Header";

import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Shop from "./pages/Shop";
import Feed from "./pages/Feed";
import User from "./pages/User";
import Favourites from "./pages/Favourites";
import Notification from "./pages/Notification";
import RecentlyViewed from "./pages/RecentlyViewed";
import MyOrders from "./pages/MyOrders";
import MyAddress from "./pages/MyAddress";
import PaymentMethod from "./pages/PaymentMethod";

function App() {
  return (
    <Container
      // px={34}
      sx={{ paddingX: 1 }}
    >
      <CssBaseline />
      <Header />
      <Box mt={10} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/user" element={<User />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/recentlyViewed" element={<RecentlyViewed />} />
        <Route path="/myOrders" element={<MyOrders />} />
        <Route path="/myAddress" element={<MyAddress />} />
        <Route path="/paymentMethod" element={<PaymentMethod />} />
        <Route path="*" element={<h1>404: File Not Found</h1>} />
      </Routes>
      <Box mt={10} />
      <LowBar />
    </Container>
  );
}

export default App;
