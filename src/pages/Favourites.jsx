import {
  Button,
  Card,
  Rating,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  IconButton,
  // FavoriteBorderOutlined as FavoriteIcon,
} from "@mui/material";

import { FavoriteBorderOutlined as FavoriteIcon } from "@mui/icons-material";

const Favourites = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
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
  );
};

export default Favourites;
