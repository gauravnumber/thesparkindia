import Image from "mui-image";
import {
  ThreeDRotation,
  KeyboardOptionKey,
  ThreeGMobiledata,
  MoreVert,
  FavoriteBorderOutlined,
  FavoriteBorderTwoTone,
  FavoriteBorder,
} from "@mui/icons-material";
import {
  Checkbox,
  Typography,
  Box,
  Stack,
  Avatar,
  Button,
  IconButton,
} from "@mui/material";

const Post = () => {
  const blackColor = "rgba(0, 0, 0, 0.4)";
  const lightRed = "#feaaaa";

  return (
    <Box
      sx={{
        p: "10.5px 18px",
        mt: "10px",
        backgroundColor: "#fff",
      }}
    >
      <Stack direction="row">
        <Avatar
          // variant="square"
          src="https://source.unsplash.com/29x29?woman-face-head"
          sx={{
            width: 29,
            height: 29,
            mr: "12px",
          }}
        />
        <Stack
          direction="column"
          // justifyContent="flex-start"
          //  alignItems="center"
        >
          <Typography
            sx={{
              fontSize: 15,
              fontWeight: 500,
              lineHeight: "18px",
            }}
          >
            Pavithra
          </Typography>
          <Typography
            sx={{
              fontSize: 10,
              fontWeight: 400,
              lineHeight: "12px",
              color: blackColor,
            }}
          >
            10 hours ago
          </Typography>
        </Stack>
        <Button
          sx={{
            p: "5px",
            // width: 67,
            height: 25,
            ml: "34px",
            color: "primary.blue2",
            border: `1px solid ${lightRed}`,
            borderRadius: "7px",
          }}
        >
          &bull; Follow
        </Button>
        <Box flexGrow={1} />
        <IconButton
          sx={{
            p: 0,
            "& .MuiSvgIcon-root": {
              color: "#000",
            },
          }}
        >
          <MoreVert />
        </IconButton>
      </Stack>
      <Image
        src="https://source.unsplash.com/324x327"
        alt="post"
        sx={{ width: 324, height: 327, mt: 1 }}
      />
      <Stack direction="row" alignItems="center">
        <Checkbox
          icon={<FavoriteBorderOutlined />}
          checkedIcon={<FavoriteBorder />}
          // checkedIcon={<FavoriteBorderTwoTone />}
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
      </Stack>
    </Box>
  );
};

export default Post;
