import { ArrowForwardIosOutlined } from "@mui/icons-material";
import {
  GlobalStyles,
  Typography,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  IconButton,
} from "@mui/material";

const Help = () => {
  const lists = [
    "I forgot my password",
    "I cannot reset my password",
    "I have using logging in with Email/Google/Facebook",
    "I don't remember my email or mobile",
  ];
  return (
    <Box sx={{ p: 2 }}>
      <GlobalStyles
        styles={{
          body: {
            backgroundColor: "#fff",
          },
        }}
      />
      <Typography sx={{ fontSize: "24px", mb: "36px" }}>
        Recover your Account
      </Typography>

      <List disablePadding>
        {lists.map((value, index) => (
          <ListItem
            disablePadding
            key={index}
            secondaryAction={
              <IconButton>
                <ArrowForwardIosOutlined />
              </IconButton>
            }
            sx={{
              borderBottom: "1px solid",
              borderColor: "divider",
              py: 1,
            }}
          >
            <ListItemButton>
              <ListItemText primary={value} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Help;
