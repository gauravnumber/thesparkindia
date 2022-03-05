import {
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
        <ListItem
          sx={{ my: 0, borderBottom: 1, borderColor: "divider" }}
          secondaryAction="icon"
          // secondaryPosition="top"
          disablePadding
        >
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              src="https://source.unsplash.com/100x100"
              sx={{ borderRadius: 3 }}
            />
            <span>some</span>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography
                fontWeight={(theme) => theme.typography.fontWeightMedium}
              >
                Super cool 3 mode LED 3v special graded
              </Typography>
            }
            secondary={
              <Typography color="text.primary">
                <Typography
                  variant="subtitle2"
                  fontWeight={400}
                  // fontWeight={(theme) => theme.typography.fontWeightNormal}
                >
                  Umar Retail marketing
                </Typography>
                <Typography
                  variant="caption"
                  fontSize={(theme) => theme.typography.pxToRem(10)}
                >
                  3.5 / 5
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    display: "flex",
                    // fontSize: (theme) => theme.typography.pxToRem(12),
                    // justifyContent: "space-around"
                  }}
                >
                  <Typography
                    color="text.secondary"
                    fontSize={(theme) => theme.typography.pxToRem(12)}
                  >
                    Rs <del>799</del>
                  </Typography>
                  <Typography
                    ml={2}
                    fontWeight={(theme) => theme.typography.fontWeightMedium}
                    fontSize={(theme) => theme.typography.pxToRem(12)}
                  >
                    Rs 680 per pc
                  </Typography>
                </Typography>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  fontSize={(theme) => theme.typography.pxToRem(11)}
                >
                  Min Qty. 10 (negotiable)
                </Typography>
              </Typography>
            }
          />
        </ListItem>
      </List>
    </>
  );
};

export default FavouritePage;
