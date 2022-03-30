import { Paper } from "@mui/material";
import Header from "./Header";
import Lists from "./Lists";

const RecentlyViewedProducts = () => {
  return (
    <Paper
      sx={{
        p: 1,
        pb: 0,
        mb: 0,
        borderRadius: "unset",
      }}
    >
      <Header />
      <Lists />
    </Paper>
  );
};

export default RecentlyViewedProducts;
