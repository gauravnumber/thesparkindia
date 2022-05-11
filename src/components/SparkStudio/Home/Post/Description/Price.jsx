import { Image } from "mui-image";
import { Stack, Box, Typography } from "@mui/material";

const Price = () => {
  const lightBlue = "#f1f7ff";
  const priceHeadingColor = "#1c1b1f";
  const cuttingPriceColor = "rgba(28, 27, 31,0.5)";
  const priceOffBlueColor = "#2847a1";

  return (
    <Stack
      direction="row"
      sx={{
        overflowX: "scroll",
      }}
      spacing="10px"
    >
      {Array.from(Array(3)).map((_, index) => (
        <Stack
          key={index}
          sx={{
            minWidth: 233,
            height: 88,
            backgroundColor: lightBlue,
            borderRadius: "12px",
            overflow: "hidden",
          }}
          direction="row"
          justifyContent="space-between"
          // spacing={2}
        >
          <Stack direction="column" spacing="5px" sx={{ p: "10px" }}>
            <Typography
              sx={{
                fontSize: 13,
                color: priceHeadingColor,
                lineHeight: "20px",
              }}
            >
              Dell Motherboard
            </Typography>
            <Stack direction="row" spacing="13px" alignItems="center">
              <Typography
                sx={{
                  fontSize: 13,
                  textDecorationLine: "line-through",
                  color: cuttingPriceColor,
                  lineHeight: "24px",
                }}
              >
                Rs5,000
              </Typography>
              <Typography
                sx={{
                  fontSize: 13,
                  fontWeight: 500,
                  // textDecorationLine: "line-through",
                  // color: cuttingPriceColor,
                  lineHeight: "24px",
                }}
              >
                Rs3000
              </Typography>
            </Stack>
            <Typography
              sx={{
                pl: "22px",
                fontSize: 12,
                color: priceOffBlueColor,
              }}
            >
              21%off
            </Typography>
          </Stack>
          <Image
            src={`https://source.unsplash.com/80x88?MotherBoard&sig=${index}`}
            width={80}
          />
          {/* <Box
            width={80}
            backgroundColor="green"
            backgroundImage={`https://source.unsplash.com/80x88`}
          /> */}
        </Stack>
      ))}
    </Stack>
  );
};

export default Price;
