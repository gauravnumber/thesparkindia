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
              borderRadius: "2.7px",
              bgcolor: (theme) => theme.palette.primary.sparkBlue,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                height: 206,
                backgroundColor: "black",
                backgroundImage: `url(https://source.unsplash.com/308x206?sig=${index})`,
                color: "white",
                p: "18px",
                borderRadius: "2.7px 2.7px 0 0",
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
                p: "19px",
                color: "white",
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
