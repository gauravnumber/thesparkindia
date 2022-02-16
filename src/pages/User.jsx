import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import RestoreIcon from "@mui/icons-material/Restore";
import LibraryAddCheckOutlinedIcon from "@mui/icons-material/LibraryAddCheckOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import {
  Paper,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  BottomNavigation,
  BottomNavigationAction,
  Divider,
  Grid,
  IconButton,
  Button,
  Box,
  Typography,
  styled,
} from "@mui/material";

import { useState } from "react";

const User = () => {
  // const [value, setValue] = useState();

  const menu = [
    {
      name: "My Orders",
      icon: <LibraryAddCheckOutlinedIcon />,
    },
    {
      name: "Recently Viewed",
      icon: <AccessTimeOutlinedIcon />,
    },
    {
      name: "Favourites",
      icon: <FavoriteBorderOutlinedIcon />,
    },
    {
      name: "My Coupon",
      icon: <LocalOfferOutlinedIcon />,
    },
  ];

  const FollowNumbers = styled(Box)(({ theme }) => ({
    color: theme.palette.primary.main,
  }));

  return (
    <Grid container direction="column">
      <Grid item>
        <Grid item container>
          <IconButton size="large">
            <AccountCircleOutlinedIcon />
          </IconButton>

          <Grid item container direction="row" spacing={3} wrap="nowrap">
            <Grid
              item
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <Typography variant="h4">00</Typography>
              </Grid>
              <Grid item>Followers</Grid>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid
              item
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <Typography variant="h4">00</Typography>
              </Grid>{" "}
              <Grid item>Following</Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item container spacing={3}>
          <Button variant="contained">Sign up</Button>
          <Button variant="outlined">Sign up</Button>
        </Grid>
      </Grid>
      <Divider />
      <Grid item my={3}>
        <BottomNavigation
          showLabels
          // value={value}
          // onChange={(event, newValue) => {
          //   setValue(newValue);
          // }}
        >
          {menu.map((item, key) => (
            <BottomNavigationAction
              key={key + item.name}
              label={item.name}
              // sx={{ width: 0 }}
              icon={
                <Paper elevation={5} sx={{ p: 2, borderRadius: "50%" }}>
                  {item.icon}
                </Paper>
              }
            />
          ))}
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
