import { styled, Typography } from "@mui/material";

const Dot = styled(Typography)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 5.85,
  height: 15.08,
  fontWeight: 500,
  fontSize: theme.typography.pxToRem(9),
  // backgroundColor: "#cce2ff",
  // backgroundColor: "primary.blue2",
}));

export default Dot;
