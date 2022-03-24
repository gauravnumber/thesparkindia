import { styled, Typography } from "@mui/material";

const Countdown = styled(Typography)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 18.85,
  height: 15.08,
  fontWeight: 500,
  fontSize: theme.typography.pxToRem(9),
  backgroundColor: "#cce2ff",
  // backgroundColor: "primary.blue2",
}));

export default Countdown;
