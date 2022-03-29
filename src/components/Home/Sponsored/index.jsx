import { Typography, Paper, Box, Stack } from "@mui/material";

const Sponsored = () => {
  return (
    <Paper
      sx={{
        mt: 1,
        p: 1,
        borderRadius: "3px",
      }}
    >
      <Typography
        sx={{
          color: (theme) => theme.palette.primary.blue2,
          fontSize: (theme) => theme.typography.pxToRem(19),
          fontWeight: 500,
        }}
      >
        SPONSORED
      </Typography>

      <Stack
        direction="row"
        spacing="12px"
        sx={{
          overflowX: "scroll",
          // minWidth: 0,
        }}
      >
        {Array.from(Array(3)).map((_, index) => (
          <Box
            key={index}
            sx={{
              // width: 308,
              // height: 206,
              minWidth: 308,
              bgcolor: (theme) => theme.palette.primary.sparkBlue,
              // borderRadius: (theme) => theme.typography.pxToRem(27.8),
              borderRadius: (theme) => theme.typography.pxToRem(2.78),
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                height: 206,
                backgroundColor: "black",
                background: `radial-gradient(82.38% 345.99% at 82.38% 45.99%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.75) 100%),url(https://source.unsplash.com/308x206?sig=${index})`,
                color: "white",
                px: "18px",
                py: "14px",
                // borderRadius: "2.7px 2.7px 0 0",
              }}
            >
              <Typography
                sx={{
                  // color: (theme) => theme.palette.primary.blue2,
                  fontSize: (theme) => theme.typography.pxToRem(21),
                  fontWeight: 500,
                }}
              >
                Sony
              </Typography>
              <Typography
                sx={{
                  fontSize: (theme) => theme.typography.pxToRem(15),
                }}
              >
                Brand you can trust
              </Typography>
            </Box>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{
                px: "19px",
                py: "10px",
                color: "white",
                // borderRadius: "0 0 2.7px 2.7px",
                // borderRadius: (theme) => theme.typography.pxToRem(2.78),
                bgcolor: (theme) => theme.palette.primary.sparkBlue,
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: (theme) => theme.typography.pxToRem(18.5),
                  // color: "white",
                }}
              >
                From &#8377;12,000/-
              </Typography>
              <Typography>&gt;</Typography>
            </Stack>
          </Box>
        ))}
      </Stack>
    </Paper>
  );
};

export default Sponsored;
