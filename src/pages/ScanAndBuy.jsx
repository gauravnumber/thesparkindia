import { Paper, Box, Stack, Typography } from "@mui/material";

const ScanAndBuy = () => {
  return (
    <Paper
      sx={{
        p: 1,
        // pt: 2,
        mt: 6,
      }}
    >
      <Box>
        <Stack direction="row" justifyContent="space-between">
          <Typography>Recent Scans</Typography>
          <Typography>See all</Typography>
        </Stack>
        <Stack
          direction="row"
          //  spacing={2}
          justifyContent="space-between"
        >
          {Array.from(Array(3)).map((_, index) => (
            <Box key={index}>
              <Box sx={{ bgcolor: "red", width: 100, height: 100 }} />
              <Stack direction="row" justifyContent="space-between">
                <Typography
                  sx={{ fontSize: (theme) => theme.typography.pxToRem(13) }}
                >
                  Today
                </Typography>
                <Typography
                  sx={{ fontSize: (theme) => theme.typography.pxToRem(13) }}
                >
                  07:20PM
                </Typography>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Box>

      <Box sx={{ mt: 3 }}>
        <Stack direction="row" justifyContent="space-between">
          <Typography>Recent Products</Typography>
          <Typography>See all</Typography>
        </Stack>

        <Stack direction="row">
          <Box sx={{ width: 50, height: 50, bgcolor: "blue" }} />
          <Stack direction="column">
            <Typography>Comprton.pvt</Typography>
            <Typography>Black mouse with 1m wire</Typography>
            <Typography>View 4 offers &gt;</Typography>
          </Stack>
        </Stack>
      </Box>
    </Paper>
  );
};
export default ScanAndBuy;
