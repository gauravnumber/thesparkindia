import { Box, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CreateIcon from "@mui/icons-material/Create";

function AccountInformation() {
  return (
    <Box
      sx={{
        background: "#FFFFFF",
        mx: -1,
      }}
    >
      <Box
      // mx={-2}
      >
        <Typography
          sx={{
            color: "#000000",
            fontFamily: "Roboto",
            fontSize: 15,
            mx: 2,
          }}
        >
          User name
        </Typography>
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontSize: 9,
            m: 2,
            color: "rgba(0, 0, 0, 0.7)",
          }}
        >
          Sparkindia
        </Typography>
        <Typography
          sx={{
            color: "#000000",
            fontFamily: "Roboto",
            fontSize: 15,
            m: 2,
          }}
        >
          Phone
        </Typography>
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontSize: 9,
            m: 2,
            color: "rgba(0, 0, 0, 0.7)",
          }}
        >
          9657869764761
        </Typography>
        <Typography
          sx={{
            color: "#000000",
            fontFamily: "Roboto",
            fontSize: 15,
            m: 2,
          }}
        >
          Email address
        </Typography>
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontSize: 9,
            m: 2,
            color: "rgba(0, 0, 0, 0.7)",
          }}
        >
          asafgaf@gmail.com
        </Typography>
        <Typography
          sx={{
            color: "#000000",
            fontFamily: "Roboto",
            fontSize: 15,
            m: 2,
          }}
        >
          Country
        </Typography>
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontSize: 9,
            m: 2,
            color: "rgba(0, 0, 0, 0.7)",
          }}
        >
          India
        </Typography>
      </Box>
    </Box>
  );
}

export default AccountInformation;
