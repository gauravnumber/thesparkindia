import { IconButton, Typography, Grid, Box, Stack } from "@mui/material";
import { PanoramaFishEye } from "@mui/icons-material";

const Slide = () => {
  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        mt: 1,
        // height: 210,

        overflowX: "scroll",
      }}
    >
      {Array.from(Array(10)).map((_, index) => (
        <Box
          key={index}
          sx={{
            // width: "148px",
            // width: 148,
            minWidth: 148,
            // height: 210,
            color: (theme) => theme.palette.primary.contrastText,
            backgroundColor: "black",
            borderRadius: "3px",
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 94.58%), url(.jpg);",
            border: `1px solid #ff2608`,

            // borderImageSource:
            //   " linear-gradient(180deg, #FF2608 0%, rgba(255, 38, 8, 0) 100%)",
          }}
        >
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: (theme) => theme.typography.pxToRem(8.07),
              color: "#d6d6d6",
            }}
          >
            Ashu PVT
          </Typography>
          <Typography>Best Electric trimmers in 2022 with 5 Modes</Typography>
          <Typography>
            <IconButton size="small">
              <PanoramaFishEye />
            </IconButton>
            2,352 watching
          </Typography>
        </Box>
      ))}
    </Stack>
  );
};

export default Slide;
