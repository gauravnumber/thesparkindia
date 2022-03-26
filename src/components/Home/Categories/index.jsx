import { Paper } from "@mui/material";
import Header from "./Header";
import ElectronicItems from "./ElectronicItems";

const Categories = () => {
  return (
    <Paper sx={{ mx: 1, mt: 1, p: 1, borderRadius: "3px" }}>
      <Header />
      <ElectronicItems />
    </Paper>
  );
};

export default Categories;
