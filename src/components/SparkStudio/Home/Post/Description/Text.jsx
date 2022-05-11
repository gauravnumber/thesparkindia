import { Box, Stack, Typography } from "@mui/material";

const Text = () => {
  return (
    <Typography
      sx={{
        mt: 2,
        fontSize: 13,
        width: 320,
        height: 40,
        // maxWidth: 320,
        // textOverflow: "ellipsis",
        // whiteSpace: "nowrap",
      }}
      noWrap
    >
      computer, display, electronic, electronics, information,{" "}
      <Typography
        component="span"
        sx={{
          fontSize: "inherit",
          color: "primary.sparkBlue",
        }}
      >
        #Motherboard
      </Typography>{" "}
      <Typography
        component="span"
        sx={{
          fontSize: "inherit",
          color: "primary.sparkBlue",
        }}
      >
        #Motherboard
      </Typography>
      {/* <Typography
        component="span"
        sx={{
          fontSize: "inherit",
          // color: "primary.sparkBlue",
        }}
      >
        more
      </Typography> */}
    </Typography>
  );
};

export default Text;
