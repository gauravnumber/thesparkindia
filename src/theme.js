import { red, green, blue } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: blue.A200
      // main: blue[400]
      // main: green["A700"],
      // // main: red[500],
    },
    background: {
      // paper: red[500],
      // default: red[500]
    }
  },
});

export default theme