import { styled, Tab } from "@mui/material";

const CategorieTab = styled((props) => <Tab {...props} />)(({ theme }) => ({
  fontSize: (theme) => theme.typogrpahy.pxToRem(9),
  fontWeight: "fontWeightRegular",
  textTransform: "none",
  padding: 0,
  // minWidth: `${theme.typography.pxToRem(80)}`,
}));

export default CategorieTab;
