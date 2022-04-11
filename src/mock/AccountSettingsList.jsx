import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import IconButton from "@mui/material/IconButton";

function AccountSettingsList() {
  return (
    <div>
      <Box>
        <Typography
          sx={{
            height: 30,
            ml: -2,
            pl: 4,
            backgroundColor: "#F4F4F4",
            color: "#223263",
            fontFamily: "Roboto",
          }}
        >
          My Account
        </Typography>

        <Typography
          variant="h6"
          component={Link}
          to="/edit-profile"
          // component="h3"
          sx={{
            display: "block",
            m: 2,
            color: "#000000",
          }}
        >
          Edit profile
          <IconButton sx={{ position: "absolute", right: 0 }}>
            <ChevronRightIcon />
          </IconButton>
        </Typography>

        <Typography
          variant="h6"
          component={Link}
          to="/my-address"
          // component="h3"
          sx={{
            display: "block",
            m: 2,
            color: "#000000",
          }}
        >
          My Address
          <IconButton sx={{ position: "absolute", right: 0 }}>
            <ChevronRightIcon />
          </IconButton>
        </Typography>

        <Typography
          variant="h6"
          // component="h3"
          component={Link}
          to="/payment-method"
          sx={{
            display: "block",
            m: 2,
            color: "#000000",
          }}
        >
          Bank Accounts/Cards
          <IconButton sx={{ position: "absolute", right: 0 }}>
            <ChevronRightIcon />
          </IconButton>
        </Typography>

        <Typography
          sx={{
            height: 30,
            ml: -2,
            pl: 4,
            backgroundColor: "#F4F4F4",
            color: "#223263",
            fontFamily: "Roboto",
          }}
        >
          Message
        </Typography>

        <Typography
          variant="h6"
          component="h3"
          sx={{
            m: 2,
            color: "#000000",
          }}
        >
          Chart settings
          <IconButton sx={{ position: "absolute", right: 0 }}>
            <ChevronRightIcon />
          </IconButton>
        </Typography>

        <Typography
          variant="h6"
          // component="h3"
          component={Link}
          to="/notification"
          sx={{
            display: "block",
            m: 2,
            color: "#000000",
          }}
        >
          Notification settings
          <IconButton sx={{ position: "absolute", right: 0 }}>
            <ChevronRightIcon />
          </IconButton>
        </Typography>

        <Typography
          variant="h6"
          // component="h3"
          component={Link}
          to="/privasy-settings"
          sx={{
            display: "block",
            m: 2,
            color: "#000000",
          }}
        >
          Privacy settings
          <IconButton sx={{ position: "absolute", right: 0 }}>
            <ChevronRightIcon />
          </IconButton>
        </Typography>

        <Typography
          variant="h6"
          component="h3"
          sx={{
            m: 2,
            color: "#000000",
          }}
        >
          Blocked Users
          <IconButton sx={{ position: "absolute", right: 0 }}>
            <ChevronRightIcon />
          </IconButton>
        </Typography>

        <Typography
          variant="h6"
          // component="h3"
          component={Link}
          to="/language"
          sx={{
            display: "block",
            m: 2,
            color: "#000000",
          }}
        >
          Language
          <IconButton sx={{ position: "absolute", right: 0 }}>
            <ChevronRightIcon />
          </IconButton>
        </Typography>

        <Typography
          sx={{
            height: 30,
            ml: -2,
            pl: 4,
            backgroundColor: "#F4F4F4",
            color: "#223263",
            fontFamily: "Roboto",
          }}
        >
          Support
        </Typography>

        <Typography
          variant="h6"
          // component="h3"
          component={Link}
          to="/help-center"
          sx={{
            display: "block",
            m: 2,
            color: "#000000",
          }}
        >
          Help center
          <IconButton sx={{ position: "absolute", right: 0 }}>
            <ChevronRightIcon />
          </IconButton>
        </Typography>

        <Typography
          variant="h6"
          component="h3"
          sx={{
            m: 2,
            color: "#000000",
          }}
        >
          Terms and Conditions
          <IconButton sx={{ position: "absolute", right: 0 }}>
            <ChevronRightIcon />
          </IconButton>
        </Typography>

        <Typography
          variant="h6"
          component="h3"
          sx={{
            m: 2,
            color: "#000000",
          }}
        >
          Rate us
          <IconButton sx={{ position: "absolute", right: 0 }}>
            <ChevronRightIcon />
          </IconButton>
        </Typography>

        <Typography
          variant="h6"
          component="h3"
          sx={{
            m: 2,
            color: "#000000",
          }}
        >
          Account Deletion
          <IconButton sx={{ position: "absolute", right: 0 }}>
            <ChevronRightIcon />
          </IconButton>
        </Typography>
      </Box>
    </div>
  );
}

export default AccountSettingsList;
