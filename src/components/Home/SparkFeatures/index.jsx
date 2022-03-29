import { QrCode } from "@mui/icons-material";
import { IconButton, Stack, Box, Typography, Button } from "@mui/material";

const SparkFeatures = () => {
  return (
    <Stack
      direction="row"
      spacing="12px"
      sx={{
        mt: "12px",
        mx: "12px",
        overflowX: "scroll",
      }}
    >
      {Array.from(Array(8)).map((_, index) => (
        <Stack
          direction="column"
          key={index}
          sx={{
            minWidth: 115,
            height: 119,
            backgroundColor: (theme) => theme.palette.background.paper,
            borderRadius: (theme) => theme.typography.pxToRem(3),
            boxShadow: "0px 4px 10px -5px rgba(0, 0, 0, 0.13)",
            p: "8px",
          }}
        >
          <Stack direction="row" spacing="5px" alignItems="center">
            <IconButton
              sx={{
                p: 0,
                m: 0,
                color: "primary.sparkBlue",
                "& .MuiSvgIcon-root": {
                  width: 37.04,
                  height: 37.04,
                },
              }}
            >
              <QrCode />
            </IconButton>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: (theme) => theme.typography.pxToRem(12),
                lineHeight: (theme) => theme.typography.pxToRem(13),
                letterSpacing: "0.02em",
                color: "primary.sparkBlue",
              }}
            >
              Scan and Shop
            </Typography>
          </Stack>
          <Typography
            sx={{
              fontSize: (theme) => theme.typography.pxToRem(7),
              lineHeight: (theme) => theme.typography.pxToRem(8),
              color: "#8b8b8b",
              mt: 1,
            }}
          >
            *Get Benefits worth 1Lac along with money
          </Typography>
          <Button
            sx={{
              backgroundColor: "primary.sparkBlue",
              color: "white",
              borderRadius: "3px",
              // fontSize: (theme) => theme.typography.pxToRem(7),
              // px: "7px",
              // py: "5px",
              p: "1px",
              mt: 1,
            }}
          >
            Know More &gt;
          </Button>
        </Stack>
      ))}
    </Stack>
  );
};

export default SparkFeatures;
