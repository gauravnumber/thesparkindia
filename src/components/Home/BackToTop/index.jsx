import { Button, IconButton } from "@mui/material";
import { ArrowUpward } from "@mui/icons-material";

const BackToTop = () => {
  return (
    <Button
      startIcon={
        <IconButton>
          <ArrowUpward />
        </IconButton>
      }
      sx={{
        mt: 1,
        backgroundColor: "white",
        color: "primary.blue2",
        borderRadius: 12,
      }}
    >
      Back To Top
    </Button>
  );
};

export default BackToTop;
