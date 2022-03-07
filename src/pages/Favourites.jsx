import { Link, Outlet } from "react-router-dom";
import { FavoriteBorderOutlined as FavoriteIcon } from "@mui/icons-material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Avatar,
  Divider,
  Paper,
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
  CardMedia,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";

const Favourites = () => {
  return (
    <Stack
      direction="column"
      spacing={2}
      // m={1}
    >
      {/* <Outlet /> */}
      {Array.from(Array(4)).map((_, index) => (
        <Paper key={index} elevation={3}>
          <Grid container direction="column">
            <Grid
              // spacing={2}
              item
              container
              justifyContent="space-between"
              alignItems="center"
              p={1}
            >
              <Grid item xs>
                <Typography
                  variant="h6"
                  component={Link}
                  to="led"
                  // component="div"
                  // color="blue"
                  // color="text.primary"
                  // color="text.secondary"
                  // color={(theme) => theme.palette.primary.main}
                >
                  LED Wishlist
                </Typography>
              </Grid>
              <Grid item xs>
                <Typography variant="caption" component="div">
                  &#8231; 5 items
                </Typography>
              </Grid>
              <Grid item>
                <IconButton edge="end">
                  <MoreVertIcon />
                </IconButton>
              </Grid>
            </Grid>

            <Divider />
            {/* <Grid item>
          <Divider />
        </Grid> */}
            <Grid
              item
              container
              spacing={1}
              justifyContent="center"
              alignItems="center"
              mt={1}
              // ml={1}
            >
              {Array.from(Array(4)).map((_, index) => (
                <Grid key={index} item>
                  <img
                    src="https://source.unsplash.com/100x100"
                    alt="Random text"
                    width={70}
                    height={70}
                    style={{
                      borderRadius: "12px",
                    }}
                  />
                </Grid>
              ))}
              {/* <Grid item>
            <img
              src="https://source.unsplash.com/100x100"
              alt="Random text"
              sx={{
                borderRadius: "unset",
              }}
            />
          </Grid> */}
            </Grid>
          </Grid>
        </Paper>
      ))}
      {/* <Grid container spacing={1.5}>
        {Array.from(Array(12)).map((value, index) => (
          <Grid item xs={6} sm key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="Random"
                height="140"
                image="https://source.unsplash.com/200x140"
                // image="https://placeimg.com/200/140/any"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Product Details
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  p: 0,
                  // "&.MuiCardActions-root": {
                  //   padding: 0,
                  // },
                }}
                // disableSpacing
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={0.1}
                >
                  <IconButton size="small" edge="start">
                    <FavoriteIcon />
                  </IconButton>
                  <Typography
                    // variant="subtitle1"
                    variant="subtitle2"
                    color="text.secondary"
                    fontSize={10}
                    noWrap
                  >
                    50 sold
                  </Typography>
                  <Rating
                    name="half-rating-read"
                    defaultValue={3.5}
                    precision={0.5}
                    readOnly
                    size="small"
                  />
                </Stack>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
       */}
    </Stack>
  );
};

export default Favourites;
