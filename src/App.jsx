// import { useState } from "react";
// import { Icon, Menu, Container } from "semantic-ui-react";
import { CssBaseline, Container, Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Shop from "./pages/Shop";
import Feed from "./pages/Feed";
import User from "./pages/User";
import Favourites from "./pages/Favourites";
import Notification from "./pages/Notification";

import LowBar from "./components/LowBar";
import Header from "./components/Header";

function App() {
  return (
    <Container
    // sx={{ backgroundColor: "red" }}
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
        <Route path="*" element={<h1>404: File Not Found</h1>} />
      </Routes>
      <Box mt={10} />
      <LowBar />
    </Container>
  );
}

export default App;
