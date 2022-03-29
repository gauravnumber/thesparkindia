import {
  Stack,
  Divider,
  Grid,
  Button,
  Paper,
  ListItem,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Box,
  Typography,
} from "@mui/material";

const Recommended = () => {
  return (
    <Paper sx={{ mt: "12px", p: 1 }}>
      <Typography
        sx={{
          color: (theme) => theme.palette.primary.blue2,
          fontSize: (theme) => theme.typography.pxToRem(19),
          fontWeight: 500,
        }}
      >
        RECOMMENDED
      </Typography>
      <ListItem
        component="div"
        disablePadding
        secondaryAction={
          <Button
            sx={{
              backgroundColor: "primary.sparkBlue",
              borderRadius: "3px",
              color: "white",
              fontSize: (theme) => theme.typography.pxToRem(12),
              px: "5px",
              py: "4px",
            }}
          >
            View all &gt;
          </Button>
        }
        sx={{
          "& .MuiListItemSecondaryAction-root": {
            right: 0,
          },
        }}
      >
        <ListItemButton sx={{ pl: 0 }}>
          <ListItemAvatar>
            <Avatar
              src="https://source.unsplash.com/48x46"
              sx={{
                //  width: 48,
                height: 46,
                borderRadius: "unset",
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: (theme) => theme.typography.pxToRem(13),
                  lineHeight: (theme) => theme.typography.pxToRem(15),
                  width: 225,
                }}
              >
                Recommended LED 16inch Moniters
              </Typography>
            }
            secondary={
              <Typography
                sx={{
                  // fontWeight: 500,
                  fontSize: (theme) => theme.typography.pxToRem(11),
                  lineHeight: (theme) => theme.typography.pxToRem(13),
                  color: "#656565",
                  mt: "5.29px",
                }}
              >
                Based on Your Recent Activity
              </Typography>
            }
          />
        </ListItemButton>
      </ListItem>
      <Grid
        container
        sx={{
          // height: 357,
          mt: 2,
          //  borderColor: "divider", borderTop: 1
        }}
      >
        <Grid container direction="column" alignItems="center" item xs={7}>
          <Avatar
            src="https://source.unsplash.com/196x149?monitor"
            sx={{ width: 196, height: 149, borderRadius: "unset" }}
          />
          <Stack direction="column" spacing={1} sx={{ p: 1 }}>
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
            <Stack
              direction="row"
              alignItems="center"
              spacing="6px"
              sx={{ pl: "12px" }}
            >
              <Typography
                sx={{
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
                color: "#338aff",
                fontSize: (theme) => theme.typography.pxToRem(11),
                lineHeight: (theme) => theme.typography.pxToRem(15),
                pl: "12px",
              }}
            >
              For 50 units
            </Typography>
          </Stack>
        </Grid>
        <Grid item container flexDirection="column" xs={5}>
          {/* <Box
            sx={{
              backgroundColor: "red",
              height: 100,
            }}
          />
          <Box
            sx={{
              backgroundColor: "blue",
              height: 100,
            }}
          /> */}
          {Array.from(Array(2)).map((_, index) => (
            <Stack
              key={index}
              direction="column"
              alignItems="center"
              sx={{ width: 154 }}
            >
              <Avatar
                src="https://source.unsplash.com/50x50?monitor"
                sx={{
                  // width: 50,
                  height: 50,
                  borderRadius: "unset",
                  // textAlign: "center",
                }}
              />
              <Stack direction="column" spacing={1} sx={{ p: 1 }}>
                <Typography
                  noWrap
                  sx={{
                    fontSize: (theme) => theme.typography.pxToRem(13),
                    lineHeight: (theme) => theme.typography.pxToRem(15),
                    textOverflow: "ellipsis",
                    // width: 206,
                    // height: 15,
                  }}
                >
                  Dell 16inch monitor 500W input monitor
                </Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing="6px"
                  sx={{ pl: "12px" }}
                >
                  <Typography
                    sx={{
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
                    color: "#338aff",
                    fontSize: (theme) => theme.typography.pxToRem(11),
                    lineHeight: (theme) => theme.typography.pxToRem(15),
                    pl: "12px",
                  }}
                >
                  For 50 units
                </Typography>
              </Stack>
            </Stack>
          ))}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Recommended;
