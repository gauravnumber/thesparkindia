import { Paper, Stack, Box, Typography } from "@mui/material";

const Tabs = () => {
  return (
    <Stack direction="row" spacing={1} sx={{ mt: 1, overflowY: "scroll" }}>
      {Array.from(Array(6)).map((_, index) => (
        <Paper key={index} sx={{ p: 2 }} elevation={2}>
          <Typography noWrap>Fasion and Styles</Typography>
        </Paper>
      ))}
    </Stack>
  );
};

export default Tabs;
