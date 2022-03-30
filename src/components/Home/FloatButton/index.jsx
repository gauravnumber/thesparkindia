import { Fab } from "@mui/material";
import { SearchOutlined, Headphones } from "@mui/icons-material";

const FloatButton = () => {
  return (
    <Fab
      sx={{
        position: "fixed",
        right: 25,
        bottom: 70,
      }}
    >
      <Headphones />
    </Fab>
  );
};

export default FloatButton;
