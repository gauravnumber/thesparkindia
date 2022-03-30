import { Paper } from "@mui/material";

import Header from "./Header";
import Cards from "./Cards";

const TrendingProducts = () => {
  return (
    <Paper
      sx={{
        // mx: 1,
        mt: 1,
        p: 1,
        borderRadius: "3px",
      }}
    >
      <Header />
      <Cards />
    </Paper>
  );
};

export default TrendingProducts;
