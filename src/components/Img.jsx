import { styled } from "@mui/material";

const Img = styled((props) => <img {...props} loading="lazy" />)(
  ({ theme }) => ({
    width: "100%",
    objectFit: "cover",
  }),
);

export default Img;
