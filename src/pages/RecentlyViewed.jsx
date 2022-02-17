import { FavoriteBorderOutlined as FavoriteIcon } from "@mui/icons-material";
import {
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

const RecentlyViewed = () => {
  return (
    <Grid container spacing={3}>
      {Array.from(Array(12)).map((value, index) => (
        <Grid item xs key={index}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="Random"
              height="140"
              image="https://placeimg.com/200/140/any"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Product Details
              </Typography>
            </CardContent>
            <CardActions>
              <Stack
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                spacing={2}
              >
                <IconButton>
                  <FavoriteIcon />
                </IconButton>
                <Typography variant="subtitle1" color="text.secondary">
                  50 sold
                </Typography>
                <Rating
                  name="half-rating-read"
                  defaultValue={3.5}
                  precision={0.5}
                  readOnly
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
