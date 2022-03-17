import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";

import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { Typography, IconButton, Box, AppBar } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [heading, setHeading] = useState();

  useEffect(() => {
    const path = location.pathname.slice(1);
    let headingName = path.split("-");
    headingName = headingName
      .map((text) => text.charAt(0).toUpperCase() + text.slice(1))
      .join(" ");
    console.log(headingName);

    setHeading(headingName === "" ? "SPARK INDIA" : headingName);
  }, [location.pathname]);

  // console.log(`location.pathname`, location.pathname);

  return (
    <AppBar
      position="fixed"
      sx={{
        color: "primary.blue",
        backgroundColor: (theme) => theme.palette.background.paper,
        height: 40,
        boxShadow: (theme) => theme.shadows[1],

        "& .MuiToolbar-root": {
          minHeight: 40,
        },
      }}
    >
      <Toolbar
      // disableGutters
      >
        {location.pathname !== "/" && (
          <IconButton color="inherit" onClick={() => navigate(-1)} edge="start">
            <ArrowBack />
          </IconButton>
        )}
        <Typography variant="h6" noWrap component="div">
          {heading}
          {/* {location.pathname.slice(1)} */}
          {/* SPARK INDIA */}
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton color="inherit" size="large">
          <PersonOutlineOutlinedIcon />
        </IconButton>
        <IconButton color="inherit" size="large">
          <ShoppingCartOutlinedIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
