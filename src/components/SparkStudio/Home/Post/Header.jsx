import { MoreVert } from "@mui/icons-material";
import {
  Box,
  Stack,
  Avatar,
  Typography,
  IconButton,
  Button,
} from "@mui/material";

const Header = () => {
  const blackColor = "rgba(0, 0, 0, 0.4)";
  const lightRed = "#feaaaa";

  return (
    <Stack direction="row">
      <Avatar
        // variant="square"
        src="https://source.unsplash.com/29x29?woman-face"
        sx={{
          width: 29,
          height: 29,
          mr: "12px",
        }}
      />
      <Stack
        direction="column"
        // justifyContent="flex-start"
        //  alignItems="center"
      >
        <Typography
          sx={{
            fontSize: 15,
            fontWeight: 500,
            lineHeight: "18px",
          }}
        >
          Pavithra
        </Typography>
        <Typography
          sx={{
            fontSize: 10,
            fontWeight: 400,
            lineHeight: "12px",
            color: blackColor,
          }}
        >
          10 hours ago
        </Typography>
      </Stack>
      <Button
        sx={{
          p: "5px",
          // width: 67,
          height: 25,
          ml: "34px",
          color: "primary.blue2",
          border: `1px solid ${lightRed}`,
          borderRadius: "7px",
        }}
      >
        &bull; Follow
      </Button>
      <Box flexGrow={1} />
      <IconButton
        sx={{
          p: 0,
          "& .MuiSvgIcon-root": {
            color: "#000",
          },
        }}
      >
        <MoreVert />
      </IconButton>
    </Stack>
  );
};

export default Header;
