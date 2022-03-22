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
      blue: "#223263",
      blue2: "#004aad"
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
  typography: {
    h6: {
      fontSize: (theme) => theme.typography.pxToRem(18.57),
      fontWeight: 500,
      letterSpacing: "0.02em",
    },
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
