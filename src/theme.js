import { red, green, blue, grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    // mode: "dark",
    primary: {
      main: blue.A200,

      // main: blue[400]
      // main: green["A700"],
      // main: red[500],
    },
    background: {
      // paper: red[500],
      // default: red[500]
      default: grey[100]
    }
  },
  components: {
    MuiTypography: {
      defaultProps: {
        component: "div"
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none"
        }
      }
    }
  },
  // typography: {
  //   htmlFontSize: 20
  // }
});

export default theme