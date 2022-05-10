import { styled, Tab, useTheme } from "@mui/material";

const lightRed = "rgba(217, 0, 0, 0.15)";
const boxShadow = "0px 1px 4px rgba(0, 0, 0, 0.25)";

const CategoryTab = styled((props) => <Tab {...props} iconPosition="start" />)(
  ({ theme }) => {
    return {
      color: theme.palette.primary.blue2,
      fontSize: (theme) => theme.typogrpahy.pxToRem(9),
      fontWeight: "400",
      textTransform: "none",
      padding: 10,
      // mb: 10,
      // color: "#000",

      "&.Mui-selected": {
        color: "#000",
        // color: theme.palette.primary.darkRed,
        backgroundColor: lightRed,
      },
      borderRadius: "4px",
      boxShadow,

      minHeight: "unset",
      // minHeight: `${theme.typography.pxToRem(50)}`,
    };
  },
);

export default CategoryTab;
