import { Button, IconButton } from "@mui/material";
import { ArrowUpward } from "@mui/icons-material";

const BackToTop = () => {
  return (
    <Button
      component="a"
      // href="#top"
      startIcon={
        <ArrowUpward />
        // <IconButton>
        // </IconButton>
      }
      sx={{
        mt: 1,
        backgroundColor: "white",
        color: "primary.blue2",
        borderRadius: 12,
      }}
      // onClick={() => {
      //   window.scroll({
      //     top: 0,
      //     left: 0,
      //     behavior: "scroll",
      //   });
      // }}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      Back To Top
    </Button>
  );
};

export default BackToTop;
