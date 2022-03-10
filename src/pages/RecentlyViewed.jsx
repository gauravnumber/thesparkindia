import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import {
  Avatar,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Rating,
  Stack,
  Typography,
} from "@mui/material";

const RecentlyViewed = () => {
  return (
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
            pt: 2,
            borderBottom: 1,
            borderColor: "divider",
          }}
          secondaryAction={
            <IconButton size="small">
              <FavoriteBorderOutlinedIcon />
            </IconButton>
          }
          disablePadding
        >
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
                <Typography fontSize={(theme) => theme.typography.pxToRem(6.8)}>
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

    // <Box
    // //  m={1}
    // >
    //   <Grid container spacing={1.5}>
    //     {Array.from(Array(12)).map((value, index) => (
    //       <Grid item xs={6} sm key={index}>
    //         <Card sx={{ maxWidth: 345 }}>
    //           <CardMedia
    //             component="img"
    //             alt="Random"
    //             height="140"
    //             image="https://source.unsplash.com/200x140"
    //             // image="https://placeimg.com/200/140/any"
    //           />
    //           <CardContent>
    //             <Typography gutterBottom variant="h5" component="div">
    //               Product Details
    //             </Typography>
    //           </CardContent>
    //           <CardActions
    //             sx={{
    //               p: 0,
    //               // "&.MuiCardActions-root": {
    //               //   padding: 0,
    //               // },
    //             }}
    //             // disableSpacing
    //           >
    //             <Stack
    //               direction="row"
    //               justifyContent="space-between"
    //               alignItems="center"
    //               spacing={0.1}
    //             >
    //               <IconButton size="small" edge="start">
    //                 <FavoriteIcon />
    //               </IconButton>
    //               <Typography
    //                 // variant="subtitle1"
    //                 variant="subtitle2"
    //                 color="text.secondary"
    //                 fontSize={10}
    //                 noWrap
    //               >
    //                 50 sold
    //               </Typography>
    //               <Rating
    //                 name="half-rating-read"
    //                 defaultValue={3.5}
    //                 precision={0.5}
    //                 readOnly
    //                 size="small"
    //               />
    //             </Stack>
    //           </CardActions>
    //         </Card>
    //       </Grid>
    //     ))}
    //   </Grid>
    // </Box>
  );
};

export default RecentlyViewed;
