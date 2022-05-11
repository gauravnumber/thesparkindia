import {
  BookmarkBorder,
  Favorite,
  FavoriteBorder,
  ReplyOutlined,
} from "@mui/icons-material";
import { Box, Checkbox, IconButton, Stack, Typography } from "@mui/material";

const LikedBookmarked = () => {
  return (
    <Stack direction="row" alignItems="center">
      <Checkbox
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
        sx={{
          // p: 0,
          mr: "8.31px",
          width: 21,
          height: 21,
          color: "primary.red",
          // borderRadius: 5,
          "&.Mui-checked": {
            color: "primary.red",
          },
        }}
      />

      <Typography sx={{ fontSize: 12, fontWeight: 500 }}>
        1.4K people liked this post
      </Typography>
      <Box flexGrow={1} />
      <IconButton>
        <ReplyOutlined />
      </IconButton>
      <IconButton>
        <BookmarkBorder />
      </IconButton>
    </Stack>
  );
};

export default LikedBookmarked;
