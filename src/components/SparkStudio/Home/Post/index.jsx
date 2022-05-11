import { Box } from "@mui/material";
import Image from "mui-image";
import Description from "./Description";
import Header from "./Header";

const Post = () => {
  // const blackColor = "rgba(0, 0, 0, 0.4)";
  // const lightRed = "#feaaaa";

  return (
    <Box
      sx={{
        p: "10.5px 18px",
        mt: "10px",
        backgroundColor: "#fff",
      }}
    >
      <Header />
      <Image
        src="https://source.unsplash.com/324x327"
        alt="post"
        sx={{ width: 324, height: 327, mt: 1 }}
      />
      <Description />
    </Box>
  );
};

export default Post;
