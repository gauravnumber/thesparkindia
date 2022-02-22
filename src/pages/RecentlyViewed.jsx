import { FavoriteBorderOutlined as FavoriteIcon } from "@mui/icons-material";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";

const RecentlyViewed = () => {
  return (
    <Grid container spacing={3}>
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
  );
};

export default RecentlyViewed;
