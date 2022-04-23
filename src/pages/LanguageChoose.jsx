import { IconButton, Paper, Typography, Box } from "@mui/material";
// import { Box } from "@mui/system";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function LanguageChoose() {
  return (
    <div className="App">
      <Box
        sx={{
          position: "absolute",
          width: 310,
          height: 97,
          left: 25,
          top: 50,

          fontFamily: "Roboto",
          fontStyle: "normal",
        }}
      >
        <Typography
          sx={{
            color: "#2847A1",
            fontWeight: 600,
            fontSize: 48.5758,
          }}
        >
          Choose
        </Typography>
        <Typography
          sx={{
            color: "#999898",
            fontWeight: 600,
            fontSize: 32.5758,
          }}
        >
          your language
        </Typography>
      </Box>
      <Paper
        elevation={3}
        sx={{
          position: "absolute",
          width: 145,
          height: 96,
          left: 25,
          top: 174,
          bgcolor: "#2847A1",

          fontFamily: "Roboto",
          fontStyle: "normal",
        }}
      >
        <Typography
          sx={{
            mt: 1,
            ml: 1,
            color: "#FFFFFF",
            fontWeight: 400,
            fontSize: 27.5758,
          }}
        >
          Hi There!
        </Typography>
        <Typography
          sx={{
            mt: 2,
            ml: 1,
            color: "#FFFFFF",
            fontWeight: 500,
            fontSize: 18,
          }}
        >
          English
        </Typography>
      </Paper>
      <Paper
        elevation={3}
        sx={{
          position: "absolute",
          width: 145,
          height: 96,
          left: 190,
          top: 174,
          bgcolor: "#2847A1",

          fontFamily: "Roboto",
          fontStyle: "normal",
        }}
      >
        <Typography
          sx={{
            mt: 1,
            ml: 1,
            color: "#FFFFFF",
            fontWeight: 400,
            fontSize: 27.5758,
          }}
        >
          Hello
        </Typography>
        <Typography
          sx={{
            mt: 2,
            ml: 1,
            color: "#FFFFFF",
            fontWeight: 500,
            fontSize: 18,
          }}
        >
          Hindi
        </Typography>
      </Paper>
      <Paper
        elevation={3}
        sx={{
          position: "absolute",
          width: 145,
          height: 96,
          left: 25,
          top: 290,
          bgcolor: "#2847A1",

          fontFamily: "Roboto",
          fontStyle: "normal",
        }}
      >
        <Typography
          sx={{
            mt: 1,
            ml: 1,
            color: "#FFFFFF",
            fontWeight: 400,
            fontSize: 27.5758,
          }}
        >
          హాయ్
        </Typography>
        <Typography
          sx={{
            mt: 2,
            ml: 1,
            color: "#FFFFFF",
            fontWeight: 500,
            fontSize: 18,
          }}
        >
          Telugu
        </Typography>
      </Paper>
      <Paper
        elevation={3}
        sx={{
          position: "absolute",
          width: 145,
          height: 96,
          left: 190,
          top: 290,
          bgcolor: "#2847A1",

          fontFamily: "Roboto",
          fontStyle: "normal",
        }}
      >
        <Typography
          sx={{
            mt: 1,
            ml: 1,
            color: "#FFFFFF",
            fontWeight: 400,
            fontSize: 23.5758,
          }}
        >
          வணக்கம்
        </Typography>
        <Typography
          sx={{
            mt: 2,
            ml: 1,
            color: "#FFFFFF",
            fontWeight: 500,
            fontSize: 18,
          }}
        >
          Tamil
        </Typography>
      </Paper>
      <Paper
        elevation={3}
        sx={{
          position: "absolute",
          width: 145,
          height: 96,
          left: 25,
          top: 406,
          bgcolor: "#2847A1",

          fontFamily: "Roboto",
          fontStyle: "normal",
        }}
      >
        <Typography
          sx={{
            mt: 1,
            ml: 1,
            color: "#FFFFFF",
            fontWeight: 400,
            fontSize: 27.5758,
          }}
        >
          ನಮಸ್ಕಾರ
        </Typography>
        <Typography
          sx={{
            mt: 2,
            ml: 1,
            color: "#FFFFFF",
            fontWeight: 500,
            fontSize: 18,
          }}
        >
          Kannada
        </Typography>
      </Paper>
      <Paper
        elevation={3}
        sx={{
          position: "absolute",
          width: 145,
          height: 96,
          left: 190,
          top: 406,
          bgcolor: "#2847A1",

          fontFamily: "Roboto",
          fontStyle: "normal",
        }}
      >
        <Typography
          sx={{
            mt: 1,
            ml: 1,
            color: "#FFFFFF",
            fontWeight: 400,
            fontSize: 14,
          }}
        >
          ഹേയ്, അവിടെയുണ്ടോ
        </Typography>
        <Typography
          sx={{
            mt: 2,
            ml: 1,
            color: "#FFFFFF",
            fontWeight: 500,
            fontSize: 18,
          }}
        >
          Malyalam
        </Typography>
      </Paper>
      <Paper
        elevation={3}
        sx={{
          position: "absolute",
          width: 145,
          height: 96,
          left: 25,
          top: 522,
          bgcolor: "#2847A1",

          fontFamily: "Roboto",
          fontStyle: "normal",
        }}
      >
        <Typography
          sx={{
            mt: 1,
            ml: 1,
            color: "#FFFFFF",
            fontWeight: 400,
            fontSize: 27.5758,
          }}
        >
          Hi There!
        </Typography>
        <Typography
          sx={{
            mt: 2,
            ml: 1,
            color: "#FFFFFF",
            fontWeight: 500,
            fontSize: 18,
          }}
        >
          Panjabi
        </Typography>
      </Paper>
      <Paper
        elevation={3}
        sx={{
          position: "absolute",
          width: 145,
          height: 96,
          left: 190,
          top: 522,
          bgcolor: "#2847A1",

          fontFamily: "Roboto",
          fontStyle: "normal",
        }}
      >
        <Typography
          sx={{
            mt: 1,
            ml: 1,
            color: "#FFFFFF",
            fontWeight: 400,
            fontSize: 27.5758,
          }}
        >
          ہیلو وہاں
        </Typography>
        <Typography
          sx={{
            mt: 2,
            ml: 1,
            color: "#FFFFFF",
            fontWeight: 500,
            fontSize: 18,
          }}
        >
          Urdu
        </Typography>
      </Paper>
      <Typography
        sx={{
          position: "absolute",
          top: 634,
          left: 144,
          color: "#2847A1",
          fontWeight: 600,
          fontSize: 15,
        }}
      >
        Show More
      </Typography>
      <IconButton
        sx={{
          position: "absolute",
          top: 659,
          left: 180,
          color: "#2847A1",
        }}
      >
        <ArrowDownwardIcon />
      </IconButton>
    </div>
  );
}

export default LanguageChoose;
