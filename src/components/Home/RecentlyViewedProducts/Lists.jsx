import { FavoriteBorderOutlined } from "@mui/icons-material";

import {
  Stack,
  List,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Button,
  Typography,
} from "@mui/material";

const Lists = () => {
  return (
    <List sx={{ mx: -1, pb: 0, mt: 1 }}>
      {Array.from(Array(6)).map((_, index) => (
        <ListItem
          key={index}
          disablePadding
          secondaryAction={
            <IconButton>
              <FavoriteBorderOutlined />
            </IconButton>
          }
          sx={{
            borderBottom: "1px solid",
            borderColor: "divider",
            "& .MuiListItemSecondaryAction-root": {
              top: "30%",
              right: 0,
            },
          }}
        >
          <ListItemButton>
            <ListItemAvatar>
              <Avatar
                src="https://source.unsplash.com/98x74"
                sx={{
                  width: 98,
                  height: 74,
                  borderRadius: "unset",
                }}
              />
            </ListItemAvatar>
            <ListItemText
              sx={{ ml: "12px" }}
              primary={
                <Typography
                  noWrap
                  sx={{
                    fontSize: (theme) => theme.typography.pxToRem(13),
                    lineHeight: (theme) => theme.typography.pxToRem(15),
                    textOverflow: "ellipsis",
                    width: 206,
                    // height: 15,
                  }}
                >
                  Dell 16inch monitor 500W input monitor
                </Typography>
              }
              secondary={
                <>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing="6px"
                    sx={{
                      mt: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "black",
                        fontWeight: 500,
                        fontSize: (theme) => theme.typography.pxToRem(13),
                        lineHeight: (theme) => theme.typography.pxToRem(15),
                      }}
                    >
                      Rs25,000
                    </Typography>
                    <Typography
                      sx={{
                        color: "#656565",
                        fontSize: (theme) => theme.typography.pxToRem(13),
                        lineHeight: (theme) => theme.typography.pxToRem(15),
                        textDecorationLine: "line-through",
                      }}
                    >
                      30,000
                    </Typography>
                    <Typography
                      sx={{
                        color: "#828282",
                        fontSize: (theme) => theme.typography.pxToRem(8.19),
                        lineHeight: (theme) => theme.typography.pxToRem(10),
                      }}
                    >
                      Per item
                    </Typography>
                  </Stack>
                  <Typography
                    sx={{
                      mt: "3px",
                      color: "#338aff",
                      fontSize: (theme) => theme.typography.pxToRem(11),
                      lineHeight: (theme) => theme.typography.pxToRem(15),
                    }}
                  >
                    For 50 units
                  </Typography>
                </>
              }
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default Lists;
