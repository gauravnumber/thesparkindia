import { styled } from "@mui/material";

const Img = styled((props) => <img {...props} loading="lazy" />)(
  ({ theme }) => ({
    // loading: "lazy",
    width: "100%",
    objectFit: "cover",
  }),
);

export default Img;
