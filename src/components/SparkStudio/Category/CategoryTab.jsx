import { styled, Tab, useTheme } from "@mui/material";

const CategoryTab = styled((props) => <Tab {...props} iconPosition="start" />)(
  ({ theme }) => {
    return {
      color: theme.palette.primary.blue2,
      fontSize: (theme) => theme.typogrpahy.pxToRem(9),
      fontWeight: "400",
      textTransform: "none",
      padding: 0,
      "&.Mui-selected": {
        color: theme.palette.primary.darkRed,
      },
      minHeight: `${theme.typography.pxToRem(50)}`,
    };
  },
);

export default CategoryTab;
