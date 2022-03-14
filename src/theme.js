import {
  // red, green,
  blue,
  grey,
} from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    // mode: "dark",
    primary: {
      main: blue.A200,
      red: "#c43838",
      // bgRed: "#c43838",
      // red: "#c33838"
    },
    // redButton: {
    //   main: "#c43838"
    // },
    background: {
      // paper: red[500],
      // default: red[500]
      default: grey[100],
    },
  },
  shape: {
    borderRadius: 5,
  },
  components: {
    MuiTypography: {
      defaultProps: {
        component: "div",
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
  // typography: {
  //   htmlFontSize: 20
  // }
});

export default theme;
