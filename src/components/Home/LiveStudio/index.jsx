import { Typography, Box, Grid, Stack, Paper } from "@mui/material";
import Header from "./Header";
import Slide from "./Slide";

const LiveStudio = () => {
  return (
    <Paper sx={{ mx: 1, mt: 1, p: 1, borderRadius: "3px" }}>
      <Header />
      <Slide />
    </Paper>
  );
};

export default LiveStudio;
