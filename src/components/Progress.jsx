import { Box, styled, Typography } from "@mui/material";

const Progress = () => {
  return (
    <Box
      sx={{
        // display: "flex",
        position: "relative",
        // width: "100%",
        height: 13,
        textAlign: "center",
        backgroundColor: "#cce2ff",
        borderRadius: "15px",
      }}
    >
      <Box
        sx={{
          width: 60,
          height: 13,
          backgroundColor: "#338aff",
          borderRadius: "15px",
        }}
      />
      <Typography
        sx={{
          color: "white",
          // textAlign: "center",
          // height: 13,
          position: "absolute",
          left: "35%",
          top: 0,
          height: "inherit",
          fontSize: (theme) => theme.typography.pxToRem(10.05),
        }}
      >
        200 sold
      </Typography>
    </Box>
  );
};

export default Progress;
