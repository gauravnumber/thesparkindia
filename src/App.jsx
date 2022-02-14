// import { useState } from "react";
// import { Icon, Menu, Container } from "semantic-ui-react";
import { CssBaseline, Container, Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Shop from "./pages/Shop";
import Feed from "./pages/Feed";
import User from "./pages/User";

import LowBar from "./components/LowBar";
import Header from "./components/Header";

function App() {
  return (
    <Container>
      <CssBaseline />
      <Header />
      <Box mt={10} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<h1>404: File Not Found</h1>} />
      </Routes>
      <LowBar />
    </Container>
  );
}

export default App;
