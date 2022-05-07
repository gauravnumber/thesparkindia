import {
  CameraAltOutlined,
  SearchOutlined,
  TvOutlined,
} from "@mui/icons-material";
import { Box, GlobalStyles, Tabs } from "@mui/material";
import { useState } from "react";
import CategoriePanel from "./CategoriePanel";
import CategoryTab from "./CategoryTab";
import Explore from "@/components/SparkStudio/Explore";
import Live from "@/components/SparkStudio/Live";

const Category = () => {
  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      {/* <GlobalStyles
        styles={{
          body: { backgroundColor: "#fff" },
        }}
      /> */}
      <Tabs
        variant="fullWidth"
        value={value}
        onChange={handleChange}
        sx={{
          backgroundColor: "#fff",
          ".MuiTabs-indicator": {
            backgroundColor: "primary.darkRed",
          },
        }}
      >
        <CategoryTab label="Home" icon={<CameraAltOutlined />} />
        <CategoryTab label="Explore" icon={<SearchOutlined />} />
        <CategoryTab label="Live" icon={<TvOutlined />} />
      </Tabs>
      <CategoriePanel value={value} index={0}>
        one
      </CategoriePanel>
      <CategoriePanel value={value} index={1}>
        <Explore />
      </CategoriePanel>
      <CategoriePanel value={value} index={2}>
        <Live />
      </CategoriePanel>
    </Box>
  );
};

export default Category;
