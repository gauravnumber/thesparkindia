import { Avatar, Box, Stack, Typography } from "@mui/material";

// import Slide from "./Slide";

const TrendingShops = () => {
  const lightBlue = "#b3c4ff";
  const lightBlue2 = "#f0f6ff";

  const items = [
    {
      name: "Pavithra",
      username: "@pavithra143",
      // width: 286,
    },
    {
      name: "Samantha",
      username: "@samanthas",
      // width: 228,
    },
    {
      name: "Alexa",
      username: "@alexamz",
      // width: 196,
    },
  ];

  return (
    <Box sx={{ backgroundColor: lightBlue2, p: "7px 18px" }}>
      <Stack
        direction="row"
        //  sx={{ p: "7px 18px" }}
        alignItems="center"
      >
        <Typography sx={{ fontSize: 20, fontWeight: 500 }}>
          Trending Shops
        </Typography>
        <Box flexGrow={1} />
        {/* <Typography>Trending Shops</Typography> */}
        {/* <Link>See All</Link> */}
        <Typography
          sx={{ color: "primary.sparkBlue2", fontSize: 12, fontWeight: 500 }}
        >
          See All
        </Typography>
      </Stack>
      <Stack direction="column" spacing="15px" sx={{ mt: "13px" }}>
        {items.map((item, index) => (
          <Stack
            key={index}
            direction="row"
            alignItems="center"
            sx={{
              // width: 286,
              width: [286, 228, 193][index],
              // width: item.width,
              height: 47,
              borderRadius: "0px 25px 25px 0px",
              background: lightBlue,
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
              src={`https://source.unsplash.com/43x43?sig=${index}`}
              sx={{
                width: 43,
                height: 43,
                ml: "13px",
              }}
            />
            <Stack
              direction="column"
              alignItems="center"
              spacing="2px"
              sx={{ ml: "10px" }}
            >
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
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default TrendingShops;
