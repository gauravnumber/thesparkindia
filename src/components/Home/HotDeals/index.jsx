import { Paper, Typography, Stack, Box } from "@mui/material";
import Dot from "@/components/Home/HotDeals/Dot";
import Countdown from "@/components/Home/HotDeals/Countdown";
import Progress from "@/components/Home/HotDeals/Progress";

const HotDeals = () => {
  return (
    <Paper
      //  key={index}
      sx={{ mx: 1, mt: 1, p: 1 }}
    >
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          // justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" color="primary.blue2">
          HOT DEALS
        </Typography>
        <Typography sx={{ display: "flex", ml: 2 }}>
          <Countdown>03</Countdown>
          <Dot>:</Dot>
          <Countdown>05</Countdown>
          <Dot>:</Dot>
          <Countdown>26</Countdown>
        </Typography>
        <Typography
          sx={{
            // display: "flex",
            // alignItems: "center",
            // justifyContent: "flex-end",
            // alignSelf: "flex-end",
            // justifySelf: "flex-end",
            ml: 6,
            fontSize: (theme) => theme.typography.pxToRem(13.88),
            color: "primary.grey",
          }}
        >
          See All Deals &gt;
        </Typography>
      </Typography>
      <Stack
        direction="row"
        spacing={1}
        sx={{
          overflowX: "scroll",
          mt: 1,
        }}
      >
        {Array.from(Array(10)).map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 141,
              height: 222,
              // height: 202,
              border: "1.25px solid #cce2ff",
              borderRadius: "3.76px",
              // mt: 1,
            }}
          >
            {/* <Box
            sx={{
              width: 141,
              height: 109,
              backgroundColor: "primary.blue2",
            }}
          /> */}
            <img
              src="https://source.unsplash.com/141x109?LCD,TV"
              width="141"
              height="109"
              alt="LCD TV"
            />

            <Stack spacing="5px" sx={{ p: "6.67px" }}>
              <Typography
                variant="h6"
                fontSize={(theme) => theme.typography.pxToRem(12)}
                lineHeight="13px"
              >
                16"inch LCD Dell Monitor with Cables
              </Typography>
              <Stack
                direction="row"
                alignItems="center"
                spacing="5px"
                fontSize={(theme) => theme.typography.pxToRem(10.05)}
              >
                <Typography variant="h6">&#8377;16,150</Typography>
                <Typography color="primary.grey" fontSize="inherit">
                  <del>21,150</del>
                </Typography>
                <Typography
                  color="primary.grey"
                  // fontSize="inherit"
                  fontSize={(theme) => theme.typography.pxToRem(6.87)}
                >
                  Per item
                </Typography>
              </Stack>
              <Typography
                color="#828282"
                fontSize={(theme) => theme.typography.pxToRem(10.05)}
              >
                For 50 units
              </Typography>
              <Progress />
            </Stack>
          </Box>
        ))}
      </Stack>
    </Paper>
  );
};

export default HotDeals;
