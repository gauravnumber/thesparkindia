import { useState } from "react";
import { Box, Tab, Tabs, GlobalStyles } from "@mui/material";
import {
  SearchOutlined,
  CameraAltOutlined,
  TvOutlined,
} from "@mui/icons-material";

import CategoriePanel from "./CategoriePanel";
import CategoryTab from "./CategoryTab";

const Category = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <GlobalStyles
        styles={{
          body: { backgroundColor: "#fff" },
        }}
      />
      <Tabs
        variant="fullWidth"
        value={value}
        onChange={handleChange}
        sx={{
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
        two
      </CategoriePanel>
    </Box>
  );
};

export default Category;
