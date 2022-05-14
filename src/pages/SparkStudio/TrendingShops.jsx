import {
  Avatar,
  Box,
  Button,
  GlobalStyles,
  Stack,
  Typography,
} from "@mui/material";

const TrendingShops = () => {
  const lightBlue2 = "#f0f6ff";
  const lightRed = "#feaaaa";

  const items = [
    {
      name: "Samantha",
      username: "@samanthas",
    },
    {
      name: "Pavitha",
      username: "@pavithra",
    },
    {
      name: "Alexa",
      username: "@alexa",
    },
    {
      name: "Samantha",
      username: "@samanthas",
    },
    {
      name: "Samantha",
      username: "@samanthas",
    },
    {
      name: "Samantha",
      username: "@samanthas",
    },
    {
      name: "Samantha",
      username: "@samanthas",
    },
    {
      name: "Samantha",
      username: "@samanthas",
    },
    {
      name: "Samantha",
      username: "@samanthas",
    },
  ];

  return (
    <Box>
      <GlobalStyles
        styles={{
          body: {
            backgroundColor: lightBlue2,
          },
        }}
      />
      <Typography
        sx={{
          fontSize: 20,
          fontWeight: 500,
          pt: "13px",
          mb: "13px",
        }}
      >
        Trending shops
      </Typography>
      <Stack direction="column" spacing="13px">
        {items.map((item, index) => (
          <Stack
            key={index}
            direction="row"
            alignItems="center"
            sx={{
              height: 47,
              borderRadius: "0px 25px 25px 0px",
              backgroundColor: "#fff",
              py: "11px",
              px: "6px",
            }}
          >
            <Typography
              sx={{
                borderRadius: "50%",
                width: 24,
                height: 24,
                textAlign: "center",
                backgroundColor: "#fff",
              }}
            >
              {index + 1}
            </Typography>
            <Avatar
              src={`https://source.unsplash.com/43x43?woman-face&sig=${index}`}
              sx={{
                width: 43,
                height: 43,
                ml: "13px",
              }}
            />
            <Stack direction="column" spacing="2px" sx={{ ml: "10px" }}>
              <Typography
                sx={{ fontSize: 12, fontWeight: 500, lineHeight: "14.52px" }}
              >
                {item.name}
              </Typography>
              <Typography
                sx={{
                  fontSize: 12,
                  fontWeight: 400,
                  lineHeight: "14.52px",
                  // letterSpacing: "-2%",
                }}
              >
                {item.username}
              </Typography>
            </Stack>
            <Box flexGrow={1} />
            <Button
              sx={{
                p: "5px 10px",
                // width: 67,
                height: 25,
                mr: "15px",
                color: "primary.blue2",
                border: `1px solid ${lightRed}`,
                borderRadius: "7px",
              }}
            >
              &bull; Follow
            </Button>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default TrendingShops;
