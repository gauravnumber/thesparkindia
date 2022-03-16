import { useNavigate, useLocation } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";

import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import {
  Typography,
  IconButton,
  Box,
  AppBar,
  //  styled
} from "@mui/material";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.pathname.slice(1));

  return (
    <AppBar
      position="fixed"
      sx={{
        // color: "red",
        color: "primary.blue",
        backgroundColor: (theme) => theme.palette.background.paper,
        height: 40,
        boxShadow: (theme) => theme.shadows[1],

        "& .MuiToolbar-root": {
          minHeight: 40,
        },
      }}
      //  open={open}
    >
      <Toolbar
      // disableGutters
      >
        <IconButton color="inherit" onClick={() => navigate(-1)} edge="start">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          SPARK INDIA
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
