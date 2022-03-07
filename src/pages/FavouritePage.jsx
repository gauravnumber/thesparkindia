import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import {
  Rating,
  IconButton,
  Button,
  Box,
  Stack,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  GlobalStyles,
} from "@mui/material";

const FavouritePage = () => {
  console.log("favourite page");

  return (
    <>
      {/* <GlobalStyles
        styles={{
          body: {
            backgroundColor: "white",
          },
        }}
      /> */}
      <List
        sx={{
          bgcolor: (theme) => theme.palette.background.paper,
          px: 2,
          mx: -2,
          pt: 10,
          mt: -10,
        }}
        disablePadding
      >
        {Array.from(Array(10)).map((_, index) => (
          <ListItem
            key={index}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              // my: 0,
              pt: 2,
              // p
              borderBottom: 1,
              borderColor: "divider",
              // alignItems:"flex-start"
            }}
            secondaryAction={
              <IconButton size="small">
                <FavoriteBorderOutlinedIcon />
              </IconButton>
            }
            // secondaryPosition="top"
            disablePadding
          >
            <ListItemAvatar
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                alignItems: "center",
                // height: 100,
                // height: (theme) => theme.typography.pxToRem(121),
              }}
            >
              {/* <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              alignItems: "center",
              height: "100%",
            }}
          > */}
              <Avatar
                alt="Remy Sharp"
                src="https://source.unsplash.com/75x75"
                // size={75}
                sx={{
                  borderRadius: "5px",

                  width: (theme) => theme.typography.pxToRem(75),
                  height: (theme) => theme.typography.pxToRem(75),
                }}
              />
              <Typography
                p={0.5}
                fontSize={(theme) => theme.typography.pxToRem(11)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: (theme) => theme.typography.pxToRem(61),
                  height: (theme) => theme.typography.pxToRem(20),
                  color: "text.primary",
                  bgcolor: "red",
                  borderRadius: "5px",
                  mt: 1,
                  background:
                    "linear-gradient(90deg, #FF2608 0%, rgba(255, 100, 58, 0.87) 100%)",
                  // background: linearGradient(
                  //   "90deg",
                  //   "#FF2608",
                  //   "0%",
                  //   rgba(255, 100, 58, 0.87),
                  //   "100%"
                  // ),
                }}
              >
                15% off
              </Typography>
              {/* </Box> */}
              {/* <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: 2,
              borderRadius: 2,
              bgcolor: "red",
              color: "text.primary",
              // color: (theme) => theme.palette.primary.contrastText,
            }}
          >
            <Typography
              p={0.5}
              fontSize={(theme) => theme.typography.pxToRem(11)}
            >
              15% off
            </Typography>
          </Box> */}
            </ListItemAvatar>
            <ListItemText
              sx={{ mt: "-4px", ml: 1 }}
              primary={
                <Typography
                  display="flex"
                  alignItems="center"
                  width={(theme) => theme.typography.pxToRem(179)}
                  height={(theme) => theme.typography.pxToRem(32)}
                  fontWeight={500}
                  fontStyle="normal"
                  fontSize={(theme) => theme.typography.pxToRem(14)}
                  lineHeight={(theme) => theme.typography.pxToRem(16)}
                  letterSpacing="0.02em"

                  // fontWeight={(theme) => theme.typography.fontWeightMedium}
                >
                  Super cool 3 mode LED 3v special graded
                </Typography>
              }
              secondary={
                <Typography color="text.primary">
                  <Typography
                    variant="subtitle2"
                    fontWeight={400}
                    fontSize={(theme) => theme.typography.pxToRem(10)}
                    // fontWeight={(theme) => theme.typography.fontWeightNormal}
                  >
                    Umar Retail marketing
                  </Typography>
                  <Typography
                    // variant="caption"
                    fontSize={(theme) => theme.typography.pxToRem(6.8)}
                  >
                    3.5 / 5{" "}
                    <Rating
                      value={3.5}
                      precision={0.5}
                      sx={{ fontSize: "unset" }}
                      readOnly
                    />
                  </Typography>
                  <Typography
                    // variant="caption"
                    // fontWeight={(theme) => theme.typography.fontWeightMedium}
                    fontWeight={400}
                    // fontSize={(theme) => theme.typography.pxToRem(10)}
                    sx={{
                      display: "flex",
                      mt: 2,

                      // fontSize: (theme) => theme.typography.pxToRem(12),
                      // justifyContent: "space-around"
                    }}
                  >
                    <Typography
                      color="text.secondary"
                      fontSize={(theme) => theme.typography.pxToRem(10)}
                    >
                      Rs <del>799</del>
                    </Typography>
                    <Typography
                      ml={2}
                      // fontWeight={(theme) => theme.typography.fontWeightMedium}
                      fontSize={(theme) => theme.typography.pxToRem(10)}
                    >
                      Rs 680 per pc
                    </Typography>
                  </Typography>
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    // sx={{ display: "flex" }}
                    // variant="caption"
                    // color="text.secondary"
                    // fontSize={(theme) => theme.typography.pxToRem(10)}
                  >
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      fontSize={(theme) => theme.typography.pxToRem(8)}
                    >
                      Min Qty. 10 (negotiable)
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={1}
                      //  ml={5}
                    >
                      <Button
                        // color="error"
                        sx={{
                          color: "#C33838",
                          bgcolor: "#ECECEC",
                          fontSize: "10px",
                          fontWeight: 400,
                          p: 0.2,
                          borderRadius: "5px",
                          width: "69px",
                          height: "20px",
                        }}
                        // sx={{ bgcolor: "background.default", p: 0.2 }}
                      >
                        Add to Cart
                      </Button>
                      <Button
                        sx={{
                          color: "white",
                          bgcolor: "#C43838",
                          // bgcolor: "#ECECEC",
                          fontSize: "10px",
                          fontWeight: 400,
                          p: 0.2,
                          borderRadius: "5px",
                          width: "69px",
                          height: "20px",
                          "&:hover": {
                            color: "#C43838",
                            border: 0,
                          },
                        }}

                        // sx={{
                        //   p: 0.2,
                        //   bgcolor: "error.main",
                        //   color: "error.contrastText",
                        //   //! hover not color red
                        //   ".MuiButtonBase-root &:hover": {
                        //     // bgcolor: "error",
                        //     color: "error",
                        //   },
                        // }}
                      >
                        Buy Now
                      </Button>
                    </Stack>
                  </Stack>
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default FavouritePage;
