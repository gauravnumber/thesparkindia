import { styled, Tab, useTheme } from "@mui/material";

const CategoryTab = styled((props) => <Tab {...props} />)(({ theme }) => {
  // const theme = useTheme()

  return {
    // width: (theme) => theme.typogrpahy.pxToRem(60),
    // height: (theme) => theme.typogrpahy.pxToRem(66),
    // width: 60,
    // height: 66,

    // color: "#864aad",
    // backgroundCololr: "#red",
    // backgroundCololr: "#e1eeff",
    fontSize: (theme) => theme.typogrpahy.pxToRem(9),
    fontWeight: "400",
    textTransform: "none",
    padding: 0,
    // mb: 23,
    // "& .Mui-selected": {
    //   color: "green",
    // },
    // minWidth: `${theme.typography.pxToRem(80)}`,
  };
});

export default CategoryTab;
