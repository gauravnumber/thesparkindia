import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import RestoreIcon from "@mui/icons-material/Restore";
import LibraryAddCheckOutlinedIcon from "@mui/icons-material/LibraryAddCheckOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

import {
  ListItemText,
  ListItemButton,
  ListItemIcon,
  BottomNavigation,
  BottomNavigationAction,
  Divider,
  Grid,
  IconButton,
} from "@mui/material";

import { useState } from "react";

const User = () => {
  // const [value, setValue] = useState();

  return (
    <Grid container direction="column">
      <Grid item>
        {/* <IconButton size="large">
          <HomeIcon />
        </IconButton> */}
        followers layout
      </Grid>
      <Divider />
      <Grid item>
        <BottomNavigation
          showLabels
          // value={value}
          // onChange={(event, newValue) => {
          //   setValue(newValue);
          // }}
        >
          <BottomNavigationAction
            label="My Orders"
            icon={<LibraryAddCheckOutlinedIcon />}
          />
          <BottomNavigationAction
            label="Recently Viewed"
            icon={<AccessTimeOutlinedIcon />}
          />
          <BottomNavigationAction
            label="Favourites"
            icon={<FavoriteBorderOutlinedIcon />}
          />
          <BottomNavigationAction
            label="My Coupon"
            icon={<LocalOfferOutlinedIcon />}
          />
        </BottomNavigation>
      </Grid>
      <Divider />

      <Grid item>
        <ListItemButton component="a">
          <ListItemIcon>
            <LibraryAddCheckOutlinedIcon />
          </ListItemIcon>
          <ListItemText
            primary="Sellers"
            primaryTypographyProps={{ fontWeight: "bold" }}
          />
          <ListItemIcon>
            <ArrowForwardIosOutlinedIcon />
          </ListItemIcon>
        </ListItemButton>

        <ListItemButton component="a">
          <ListItemIcon>
            <LibraryAddCheckOutlinedIcon />
          </ListItemIcon>
          <ListItemText
            primary="How to sell"
            primaryTypographyProps={{ fontWeight: "bold" }}
          />
          <ListItemIcon>
            <ArrowForwardIosOutlinedIcon />
          </ListItemIcon>
        </ListItemButton>

        <ListItemButton component="a">
          <ListItemIcon>
            <LibraryAddCheckOutlinedIcon />
          </ListItemIcon>
          <ListItemText
            primary="Language"
            primaryTypographyProps={{ fontWeight: "bold" }}
          />
          <ListItemIcon>
            <ArrowForwardIosOutlinedIcon />
          </ListItemIcon>
        </ListItemButton>

        <ListItemButton component="a">
          <ListItemIcon>
            <LibraryAddCheckOutlinedIcon />
          </ListItemIcon>
          <ListItemText
            primary="Help Center"
            primaryTypographyProps={{ fontWeight: "bold" }}
          />
          <ListItemIcon>
            <ArrowForwardIosOutlinedIcon />
          </ListItemIcon>
        </ListItemButton>

        <ListItemButton component="a">
          <ListItemIcon>
            <LibraryAddCheckOutlinedIcon />
          </ListItemIcon>
          <ListItemText
            primary="About Spark India"
            primaryTypographyProps={{ fontWeight: "bold" }}
          />
          <ListItemIcon>
            <ArrowForwardIosOutlinedIcon />
          </ListItemIcon>
        </ListItemButton>
      </Grid>
    </Grid>
  );
};

export default User;
