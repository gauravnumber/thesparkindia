import { styled, Tab, useTheme } from "@mui/material";

const CategoryTab = styled((props) => <Tab {...props} />)(({ theme }) => {
  // const theme = useTheme()

  return {
    fontSize: (theme) => theme.typogrpahy.pxToRem(9),
    fontWeight: "fontWeightRegular",
    textTransform: "none",
    padding: 0,
    // minWidth: `${theme.typography.pxToRem(80)}`,
  };
});

export default CategoryTab;
