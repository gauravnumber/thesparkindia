import {
  Avatar,
  Paper,
  Box,
  Stack,
  Typography,
  SwipeableDrawer,
} from "@mui/material";

const SwipeBox = () => {
  return (
    <Paper
      sx={{
        // mx: -1,
        px: 1,
        pt: 2,
        // mb: 50,
        mt: 6,
        // mt: -1,
        // position: "absolute",
        // // top: 56,
        // borderTopLeftRadius: 18,
        // borderTopRightRadius: 18,
        // visibility: "visible",
        // right: 0,
        // left: 0,
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        <Typography
          sx={{
            fontSize: (theme) => theme.typography.pxToRem(16),
          }}
        >
          Recent Scans
        </Typography>
        <Typography
          sx={{
            fontSize: (theme) => theme.typography.pxToRem(12),
            color: "primary.sparkBlue",
          }}
        >
          See all
        </Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-between" sx={{ mt: 1 }}>
        {Array.from(Array(3)).map((_, index) => (
          <Box key={index}>
            <Avatar
              src={`https://source.unsplash.com/100x100?mouse&sig=${index}`}
              sx={{ width: 100, height: 100, borderRadius: "9px" }}
            />
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="flex-end"
            >
              <Typography
                sx={{ fontSize: (theme) => theme.typography.pxToRem(8.7) }}
              >
                Today
              </Typography>
              <Typography
                sx={{ fontSize: (theme) => theme.typography.pxToRem(7.2) }}
              >
                07:20PM
              </Typography>
            </Stack>
          </Box>
        ))}
      </Stack>
      <Box sx={{ mt: 3 }}>
        <Stack direction="row" justifyContent="space-between">
          <Typography
            sx={{
              fontSize: (theme) => theme.typography.pxToRem(16),
            }}
          >
            Recent Products
          </Typography>
          <Typography
            sx={{
              fontSize: (theme) => theme.typography.pxToRem(12),
              color: "primary.sparkBlue",
            }}
          >
            See all
          </Typography>
        </Stack>
        {Array.from(Array(3)).map((_, index) => (
          <Stack key={index} direction="row" sx={{ mt: 1, pb: 1 }}>
            {/* <Box
        sx={{
          width: 67,
          height: 66,
          bgcolor: "blue",
          borderRadius: "9px",
        }}
      /> */}
            <Avatar
              src={`https://source.unsplash.com/67x66?black,mouse&sig=${index}`}
              sx={{ width: 67, height: 66, borderRadius: "9px" }}
            />
            <Stack direction="column" sx={{ ml: "23px", mt: "4px" }}>
              <Typography
                sx={{
                  color: "#595959",
                  fontSize: (theme) => theme.typography.pxToRem(9.62),
                  lineHeight: (theme) => theme.typography.pxToRem(11.27),
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <Avatar
                  src={`https://source.unsplash.com/10x9`}
                  sx={{ borderRadius: "unset", width: 10, height: 9 }}
                />
                Comprton.pvt
              </Typography>
              <Typography
                sx={{
                  fontSize: (theme) => theme.typography.pxToRem(16),
                }}
              >
                Black mouse with 1m wire
              </Typography>
              <Typography
                sx={{
                  mt: "2px",
                  color: "primary.sparkBlue",
                  fontSize: (theme) => theme.typography.pxToRem(12.2),
                  // lineHeight: (theme) => theme.typography.pxToRem(14),
                }}
              >
                View 4 offers &gt;
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Box>
    </Paper>
  );
};

export default SwipeBox;
