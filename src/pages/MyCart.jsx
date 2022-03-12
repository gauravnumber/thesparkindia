import { RadioButtonUnchecked, CheckCircle } from "@mui/icons-material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import {
  // ButtonGroup,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Rating,
  IconButton,
  Button,
  ButtonGroup,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  styled,
  Typography,
} from "@mui/material";

const MyCart = () => {
  const Img = styled("img")`
    width: 100%;
  `;
  return (
    <>
      <List
        sx={{
          bgcolor: (theme) => theme.palette.background.paper,
          px: 0.5,
          // pl: 1,
          mx: -1,
          pt: 10,
          mt: -10,
        }}
        // disablePadding
      >
        {Array.from(Array(10)).map((_, index) => (
          <ListItem
            key={index}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              pt: 2,
              pl: 0,
              // pr: 6,
              borderBottom: 1,
              borderColor: "divider",
              "& .MuiListItemSecondaryAction-root": {
                // top: 25,
                right: 2,
              },
            }}
            secondaryAction={
              <Stack direction="column" spacing={2}>
                <IconButton size="small">
                  <FavoriteBorderOutlinedIcon />
                </IconButton>
                <ButtonGroup
                  sx={{
                    minWidth: 21,
                    // width: 30,
                    height: 21,
                    // width: 57,
                    // p: 0,
                    // m: 0,

                    bgcolor: "#f4f4f4",
                    borderColor: "#d4d4d4",
                    // color: "primary.red",

                    "& .MuiButtonGroup-grouped": {
                      minWidth: 21,
                    },
                    "&.MuiButton-root": {
                      p: 0,
                      m: 0,
                      color: "primary.red",
                    },
                  }}
                >
                  <Button>+</Button>
                  <Button>11</Button>
                  <Button>-</Button>
                </ButtonGroup>
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
                >
                  Buy Now
                </Button>
              </Stack>
            }

            // disablePadding
          >
            <ListItemText
              sx={{
                // bgcolor: "redButton.main",
                mt: 0,
                "& .MuiCheckbox-root": {
                  // bgcolor: "redButton.main",
                  pt: 0,
                },
              }}
              primary={
                <Checkbox
                  icon={<RadioButtonUnchecked />}
                  checkedIcon={<CheckCircle />}
                  sx={{
                    color: "primary.red",
                    borderRadius: 5,
                    "&.Mui-checked": {
                      color: "primary.red",
                    },
                  }}
                />
              }
            />
            <ListItemAvatar
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src="https://source.unsplash.com/75x75"
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
                }}
              >
                15% off
              </Typography>
            </ListItemAvatar>
            <ListItemText
              sx={{ mt: "-1px", ml: 1 }}
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
                  >
                    Umar Retail marketing
                  </Typography>
                  <Typography
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
                    fontWeight={400}
                    sx={{
                      display: "flex",
                      mt: 2,
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
                      fontSize={(theme) => theme.typography.pxToRem(10)}
                    >
                      Rs 680 per pc
                    </Typography>
                  </Typography>
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      fontSize={(theme) => theme.typography.pxToRem(8)}
                    >
                      Min Qty. 10 (negotiable)
                    </Typography>
                    {/* <Stack
                      direction="row"
                      spacing={1}
                      //  ml={5}
                    > */}
                    {/* <Button
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
                      >
                        Add to Cart
                      </Button> */}
                    {/* <Button
                        sx={{
                          color: "white",
                          bgcolor: "#C43838",
                          // bgcolor: "#ECECEC",
                          fontSize: "10px",
                          fontWeight: 400,
                          p: 0.2,
                          borderRadius: "5px",
                          // width: "69px",
                          height: "20px",
                          "&:hover": {
                            color: "#C43838",
                            border: 0,
                          },
                        }}
                      >
                        Buy Now
                      </Button> */}
                    {/* </Stack> */}
                  </Stack>
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
      <Grid
        container
        direction="row"
        spacing={2}
        // alignItems="center"
        justifyContent="space-between"
        py={2}
        // mr={-20}
        // px={1}
        bgcolor={(theme) => theme.palette.background.paper}
      >
        <Grid
          item
          container
          direction="row"
          alignItems="center"
          wrap="nowrap"
          xs={3}
        >
          <Grid item>
            <Checkbox
              icon={<RadioButtonUnchecked />}
              checkedIcon={<CheckCircle />}
              sx={{
                color: "primary.red",
                borderRadius: 5,
                "&.Mui-checked": {
                  color: "primary.red",
                },
              }}
            />
          </Grid>
          <Grid item>
            <Typography
              sx={{
                fontWeight: "fontWeightMedium",
              }}
            >
              All(9)
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          pr={1}
          xs={9}
          spacing={2}
        >
          <Grid
            item
            //  container alignItems="center"
            textAlign="center"
          >
            <Typography
              sx={{
                fontWeight: "fontWeightMedium",
                // fontSize: (theme) => theme.typography.pxToRem(20),
              }}
            >
              Rs 8500
            </Typography>
            <Typography
              sx={{
                color: "#606060",
                fontWeight: "fontWeightMedium",
                fontSize: (theme) => theme.typography.pxToRem(11.04),
              }}
            >
              Total Amount
            </Typography>
          </Grid>
          <Grid item>
            <Button
              sx={{
                p: 2,
                width: 90,
                height: 33,
                bgcolor: "primary.red",
                color: "primary.contrastText",
                boxShadow: "0px 2px 10px rgba(0,0,0,0.25)",
                "&:hover": {
                  color: "primary.red",
                  bgcolor: "primary.contrastText",
                },
              }}
            >
              Checkout(3)
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
    // <Stack direction="column" spacing={2}>
    //   <Paper elevation={2} sx={{ p: 2 }}>
    //     <FormControl>
    //       <FormLabel id="address1">Deliver to</FormLabel>
    //       <RadioGroup row>
    //         <FormControlLabel
    //           value="address1"
    //           control={<Radio />}
    //           label="Random address here..."
    //         />
    //         <Button
    //           variant="outlined"
    //           size="small"
    //           sx={{
    //             textTransform: "none",
    //             color: (theme) => theme.palette.text.primary,
    //           }}
    //         >
    //           Change
    //         </Button>
    //       </RadioGroup>
    //     </FormControl>
    //   </Paper>
    //   {Array.from(Array(5)).map((_, index) => (
    //     <Paper key={index} elevation={2}>
    //       <Grid container direction="row" spacing={1} p={1}>
    //         <Grid item>
    //           <Checkbox />
    //         </Grid>
    //         <Grid item>
    //           <Img
    //             src="https://source.unsplash.com/90x130"
    //             alt={"vendor" + index}
    //             loading="lazy"
    //             // height={100}
    //           />
    //           <Typography color="text.secondary" variant="subtitle1">
    //             Vendor
    //           </Typography>
    //         </Grid>
    //         <Grid item>
    //           <Stack direction="column" spacing={3}>
    //             <Img
    //               src="https://source.unsplash.com/150x60"
    //               alt={"item" + index}
    //               // height="60"
    //               loading="lazy"
    //             />
    //             <ButtonGroup size="small" variant="outlined">
    //               <Button>-</Button>
    //               <Button>2</Button>
    //               <Button>+</Button>
    //             </ButtonGroup>

    //             <Button
    //               variant="outlined"
    //               size="small"
    //               sx={{
    //                 textTransform: "none",
    //                 color: (theme) => theme.palette.text.primary,
    //               }}
    //             >
    //               Remove
    //             </Button>
    //           </Stack>
    //         </Grid>
    //       </Grid>
    //     </Paper>
    //   ))}
    // </Stack>
  );
};

export default MyCart;
