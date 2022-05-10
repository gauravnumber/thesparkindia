import { SearchOutlined } from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Box,
  Divider,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
} from "@mui/material";

const Enquiry = () => {
  const enquiries = [
    {
      heading: "6v LED light green color",
      message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      unReadMessage: 1,
    },
    {
      heading: "Fan 3000rpm motor blue",
      message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      unReadMessage: 6,
    },
  ];

  return (
    <Box
      sx={{
        // mt: 7,
        pt: 2,
        // bgcolor: "background.paper",
      }}
    >
      <TextField
        size="small"
        sx={{
          // width: "20ch",
          // borderRadius: "50%",
          borderRadius: "15px",
          bgcolor: "background.paper",
        }}
        InputProps={{
          // borderRadius: "12px",

          startAdornment: (
            <InputAdornment position="start">
              <IconButton edge="start">
                <SearchOutlined />
              </IconButton>
            </InputAdornment>
          ),
        }}
        fullWidth
      />
      <List
        sx={{
          // width: "100%",
          mt: 2,
          mx: -1,
          // px: -1,
          py: 0,
          //  maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >
        {enquiries.map((enquiry, index) => (
          <Box key={index}>
            <ListItem
              // key={index}
              // alignItems="flex-start"
              secondaryAction={
                <Badge
                  badgeContent={enquiry.unReadMessage}
                  // mr={2}
                  sx={{ mr: 2 }}
                  color="primary"
                />
              }
            >
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src="https://source.unsplash.com/100x100"
                />
              </ListItemAvatar>
              <ListItemText
                primary={enquiry.heading}
                secondary={enquiry.message}
              />
              {/* <ListItemText secondary="like" component="span" /> */}
            </ListItem>
            <Divider
              //  variant="inset"
              component="li"
            />
          </Box>
        ))}
        {/* <ListItem
          key="first"
          // alignItems="flex-start"
          sx={
            {
              // ".MuiListItemSecondaryAction-root": {
              //   borderRadius: "50%",
              //   p: 5,
              // },
            }
          }
          secondaryAction={
            <Badge badgeContent={3} color="primary" />
            // <Stack direction="column" justifyContent="space-between">
            //   <Box
            //     component="span"
            //     sx={{
            //       bgcolor: "primary.main",
            //       // "& .MuiListItemSecondaryAction-root": {
            //       //   borderRadius: "50%",
            //       //   p: 5,
            //       // },
            //       // borderRadius: "12px",
            //       borderRadius: "50%",
            //       p: 0.5,
            //       height: "20px",
            //       width: "20px",
            //     }}
            //   >
            //     6
            //   </Box>
            //   <Box component="span" color="text.secondary" variant="caption">
            //     8:30 pm
            //   </Box>
            // </Stack>
          }
        >
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              src="https://source.unsplash.com/100x100"
            />
          </ListItemAvatar>
          <ListItemText
            primary="6v LED light green color"
            // secondary={
            //   <Typography>
            //     Lorem ipsum dolor sit amet consectetur adipisicing elit.
            //   </Typography>
            // }
            secondary="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
        </ListItem>
        <Divider
          //  variant="inset"
          component="li"
        /> */}
        {/* <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Summer BBQ"
            secondary={
              <>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  to Scott, Alex, Jennifer
                </Typography>
                {" — Wish I could come, but I'm out of town this…"}
              </>
            }
          />
        </ListItem> */}
      </List>
    </Box>
  );
};

export default Enquiry;
