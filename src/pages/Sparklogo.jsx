import { Box, Typography } from "@mui/material";

function Sparklogo() {
  return (
    <div className="App">
      <Box
        sx={{
          position: "absolute",
          width: 300,
          height: 300,
          left: 30,
          top: 100,
          alignItems: "flexend",
        }}
      >
        <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQEPDNcVL8yySg/company-logo_200_200/0/1648250400948?e=2147483647&v=beta&t=D5tkYQNjszC54QMYRumhJKDIpd5QZhXj_QQo3lET3eQ"
        height="300" width="300" />
      </Box>
      <Typography
        sx={{
          position: "absolute",
          width: 239.55,
          height: 52,
          left: 60,
          top: 410,

          fontFamily: 'Roboto',
          fontStyle: "normal",
          fontWeight: 600,
          fontSize: 22,
          // lineHeight: 26,
          display: "flex",
          alignItems: "flexend",
          textAlign: "center",
          color: "#999898"
        }}
      >
        One step destination for all B2B purchases
      </Typography>
    </div>
  );
}

export default Sparklogo;
