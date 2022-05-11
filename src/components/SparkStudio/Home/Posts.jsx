import Post from "./Post";
import { Stack } from "@mui/material";

const Posts = () => {
  return (
    <Stack direction="column" spacing="5px">
      {Array.from(Array(5)).map((_, index) => (
        <Post key={index} index={index} />
      ))}
    </Stack>
  );
};

export default Posts;
