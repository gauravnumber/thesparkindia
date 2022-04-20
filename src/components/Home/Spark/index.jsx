import { Link } from "react-router-dom";
import { IconButton, Paper, Typography, Grid } from "@mui/material";
import {
  VoiceChat,
  QrCode,
  Money,
  BrandingWatermark,
  LocalShipping,
  MoneyOff,
  VolunteerActivism,
  MoneyOffCsredRounded,
  Share,
} from "@mui/icons-material";

const Spark = () => {
  const sparkFeatures = [
    {
      name: "Scan and Buy",
      icon: <QrCode />,
      slug: "/scan-and-buy",
    },
    {
      name: "Business loan",
      icon: <Money />,
      slug: "/scan-and-buy",
    },
    {
      name: "Build your Brand",
      icon: <BrandingWatermark />,
      slug: "/scan-and-buy",
    },
    {
      name: "Ship with Spark",
      icon: <LocalShipping />,
      slug: "/scan-and-buy",
    },
    {
      name: "Spark Wallet",
      icon: <MoneyOff />,
      slug: "/scan-and-buy",
    },
    {
      name: "Coupons",
      icon: <VolunteerActivism />,
      slug: "/scan-and-buy",
    },
    {
      name: "My Orders",
      icon: <MoneyOffCsredRounded />,
      slug: "/scan-and-buy",
    },
    {
      name: "Refer and Loan",
      icon: <Share />,
      slug: "/refer",
    },
  ];

  return (
    <Paper
      sx={{
        mt: 1,
        mx: 1,
        p: 1,
        //  pb: 3
      }}
    >
      <Typography variant="h6" color="primary.blue2">
        SPARKS
      </Typography>
      <Grid
        container
        // alignItems="center"
      >
        {sparkFeatures.map((feature, index) => (
          <Grid
            key={index}
            item
            container
            justifyContent="center"
            alignItems="flex-start"
            // alignItems="center"
            // spacing={1}
            // rowSpacing={2}
            xs={3}
            component={Link}
            to={feature.slug}
            // to="/scan-and-buy"
          >
            <IconButton
              sx={{
                "& .MuiSvgIcon-root": {
                  fontSize: 37.04,
                },
              }}
            >
              {feature.icon}
              {/* <QrCode /> */}
            </IconButton>
            <Typography
              sx={{
                width: 57,
                // height: 26,
                fontSize: (theme) => theme.typography.pxToRem(12),
                textAlign: "center",
                // textDecorationLine: "none",
              }}
            >
              {feature.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default Spark;
