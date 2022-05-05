import { Avatar, Paper, Stack, Box, Typography } from "@mui/material";

const Tabs = () => {
  const lightRed = "rgba(217, 0, 0, 0.15)";
  const boxShadow = "0px 1px 4px rgba(0, 0, 0, 0.25)";

  return (
    <Stack direction="row" spacing="15px" sx={{ p: 1, overflowY: "scroll" }}>
      {Array.from(Array(6)).map((_, index) => (
        <Stack
          key={index}
          sx={{
            p: 1,
            backgroundColor: lightRed,
            // border: "0.4px solid #000",
            borderRadius: "4px",
            boxShadow,
          }}
          direction="row"
          alignItems="center"
          spacing="5px"
        >
          <Avatar
            variant="square"
            alt="Electronic"
            src={`https://source.unsplash.com/26x26?sig=${index}`}
            sx={{
              border: "0.2px solid #000",
              borderRadius: "2px",

              "&.MuiAvatar-square": {
                width: 26,
                height: 26,
              },
            }}
          />
          <Typography
            noWrap
            sx={{
              fontSize: "11px",
              fontWeight: 700,
              // letterSpacing: "-0.02em",
            }}
          >
            Fasion and Styles
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
};

export default Tabs;
