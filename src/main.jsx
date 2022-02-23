import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
// import { red } from "@mui/material/colors";
// import { ThemeProvider, createTheme } from "@mui/material/styles";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import App from "./App";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: red[500],
//     },
//   },
// });

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
