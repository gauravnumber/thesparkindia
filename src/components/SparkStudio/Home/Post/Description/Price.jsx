import { Stack, Box, Typography } from "@mui/material";

const Price = () => {
  const lightBlue = "#f1f7ff";
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
            <Typography>Dell Motherboard</Typography>
          </Stack>
          <Box
            width={80}
            backgroundColor="green"
            backgroundImage={`https://source.unsplash.com/80x88`}
          />
        </Stack>
      ))}
    </Stack>
  );
};

export default Price;
