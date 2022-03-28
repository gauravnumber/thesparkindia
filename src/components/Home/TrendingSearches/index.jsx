import { TrendingUp } from "@mui/icons-material";

import {
  Paper,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@mui/material";

const TrendingSearches = () => {
  return (
    <Paper
      sx={{
        // mx: 1,
        mt: 1,
        p: 1,
        borderRadius: "3px",
      }}
    >
      <Typography
        sx={{
          // px: "6px",
          // width: 65,
          // height: 25,
          color: (theme) => theme.palette.primary.blue2,
          fontSize: (theme) => theme.typography.pxToRem(18),
          fontWeight: 500,
        }}
      >
        TRENDING SEARCHES
      </Typography>
      <List disablePadding>
        {Array.from(Array(3)).map((_, index) => (
          <ListItem
            key={index}
            disablePadding
            secondaryAction={
              <IconButton edge="end" sx={{ color: "#000" }}>
                <TrendingUp />
              </IconButton>
            }
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  src={`https://source.unsplash.com/40x40?color,led&sig=${index}`}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: (theme) => theme.typography.pxToRem(15),
                    }}
                  >
                    5W Blue color LED
                  </Typography>
                }
                secondary="23k searches this week"
              />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem key="ViewMore" disablePadding>
          <ListItemButton sx={{ p: 0 }}>
            <ListItemText>
              <Typography
                sx={{
                  textAlign: "center",
                  color: "primary.sparkBlue",
                  fontSize: (theme) => theme.typography.pxToRem(13.875),
                }}
              >
                View More
              </Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Paper>
  );
};

export default TrendingSearches;
