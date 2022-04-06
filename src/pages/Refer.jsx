import { useState } from "react";
import {
  Divider,
  ImageList,
  ImageListItem,
  Typography,
  Stack,
  TextField,
  InputLabel,
  Paper,
  InputBase,
} from "@mui/material";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { SearchOutlined } from "@mui/icons-material";

function Refer() {
  const [inputText, setInputText] = useState("");
  const inputHandler = (e) => {
    // convert input text to lower case
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <div className="App">
      <Box
        sx={{
          width: 390,
          height: 802,
        }}
      >
        <Box
          sx={{
            bgcolor: "blue",
            width: 390,
            height: 327,
          }}
        >
          <img
            src="https://www.shoppre.com/img/refer-and-earn/refer-and-earn-shoppre-shipping.png"
            alt="no internet"
            width="390px"
            height="327px"
          />
        </Box>
        <Box
          sx={{
            width: 390,
            height: 753,
          }}
        >
          <Divider
            sx={{
              position: "relative",
              width: 54,
              borderTop: 3,
              borderBottom: 0,
              borderColor: "#2847A1",
              left: 168,
              top: 9,
            }}
          />
          <Typography
            sx={{
              position: "relative",
              left: 170,
              top: 23,
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: 19.847,
              display: "flex",
              alignItems: "flex-end",
              textAlign: "center",
              letterSpacing: 0.01,
            }}
          >
            Invite
          </Typography>
          <ImageList
            cols={4}
            sx={{
              position: "relative",
              top: 17,
              mx: 2,
            }}
          >
            <ImageListItem
              sx={{
                height: 57,
                width: 57,
              }}
            >
              <img
                src="https://www.pngitem.com/pimgs/m/40-404856_transparent-whatsapp-icon-transparent-png-circle-logo-whatsapp.png"
                alt="no internet"
              />
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 12.9438,
                  display: "flex",
                  alignItems: "flex-end",
                  textAlign: "center",
                  letterSpacing: 0.01,
                }}
              >
                Whatsapp
              </Typography>
            </ImageListItem>
            <ImageListItem
              sx={{
                height: 57,
                width: 57,
              }}
            >
              <img
                src="data:image/jpeg;base64,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"
                alt="no internet"
              />
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 12.9438,
                  display: "flex",
                  alignItems: "flex-end",
                  textAlign: "center",
                  letterSpacing: 0.01,
                }}
              >
                Instagram
              </Typography>
            </ImageListItem>
            <ImageListItem
              sx={{
                height: 57,
                width: 57,
              }}
            >
              <img
                src="https://img.favpng.com/3/11/0/computer-icons-message-png-favpng-3T6kGnwau9TbMcQ95iagfYcyw.jpg"
                alt="no internet"
              />
              <Typography
                sx={{
                  mx: 2,
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 12.9438,
                  display: "flex",
                  alignItems: "flex-end",
                  textAlign: "center",
                  letterSpacing: 0.01,
                }}
              >
                SMS
              </Typography>
            </ImageListItem>
            <ImageListItem
              sx={{
                height: 57,
                width: 57,
              }}
            >
              <img
                src="https://cdn0.iconfinder.com/data/icons/mobile-device/512/more-dots-menu-blue-round-2-512.png"
                alt="no internet"
              />
              <Typography
                sx={{
                  mx: 2,
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 12.9438,
                  display: "flex",
                  alignItems: "flex-end",
                  textAlign: "center",
                  letterSpacing: 0.01,
                }}
              >
                More
              </Typography>
            </ImageListItem>
          </ImageList>
          <Divider
            sx={{
              mt: 4,
              mb: 2,
              height: 1.1,
              bgcolor: "#C8C8C8",
            }}
          />
          <Box>
            <Typography
              sx={{
                width: 127,
                mx: 2,
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: 13.692,
                display: "flex",
                alignItems: "flex-end",
                textAlign: "center",
                letterSpacing: 0.01,
              }}
            >
              Suggested Contacts
            </Typography>
            <Typography
              sx={{
                position: "relative",
                left: 323,
                bottom: 20,
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: 13.692,
                display: "flex",
                alignItems: "flex-end",
                textAlign: "center",
                letterSpacing: 0.01,
                color: "#2847A1",
              }}
            >
              View All
            </Typography>
          </Box>
          <Box>
            <Stack
              direction="row"
              spacing={3}
              sx={{
                mx: 2,
              }}
            >
              <Typography
                sx={{
                  borderRadius: "50%",
                  bgcolor: "#2847A1",
                  width: 49,
                  height: 49,
                  fontFamily: "Roboto",
                  fontWeight: 500,
                  fontSize: 21.3982,
                  textAlign: "center",
                  letterSpacing: 0.01,
                  color: "#FFFFFF",
                }}
              >
                ch
              </Typography>
              <Typography
                sx={{
                  borderRadius: "50%",
                  bgcolor: "#2847A1",
                  width: 49,
                  height: 49,
                  fontFamily: "Roboto",
                  fontWeight: 500,
                  fontSize: 21.3982,
                  textAlign: "center",
                  letterSpacing: 0.01,
                  color: "#FFFFFF",
                }}
              >
                Ra
              </Typography>
              <Typography
                sx={{
                  borderRadius: "50%",
                  bgcolor: "#2847A1",
                  width: 49,
                  height: 49,
                  fontFamily: "Roboto",
                  fontWeight: 500,
                  fontSize: 21.3982,
                  textAlign: "center",
                  letterSpacing: 0.01,
                  color: "#FFFFFF",
                }}
              >
                Ay
              </Typography>
              <Typography
                sx={{
                  borderRadius: "50%",
                  bgcolor: "#2847A1",
                  width: 49,
                  height: 49,
                  fontFamily: "Roboto",
                  fontWeight: 500,
                  fontSize: 21.3982,
                  textAlign: "center",
                  letterSpacing: 0.01,
                  color: "#FFFFFF",
                }}
              >
                Ru
              </Typography>
              <Typography
                sx={{
                  borderRadius: "50%",
                  bgcolor: "#2847A1",
                  width: 49,
                  height: 49,
                  fontFamily: "Roboto",
                  fontWeight: 500,
                  fontSize: 21.3982,
                  textAlign: "center",
                  letterSpacing: 0.01,
                  color: "#FFFFFF",
                }}
              >
                Ju
              </Typography>
            </Stack>
            <Stack
              direction="row"
              spacing={3}
              sx={{
                mx: 2,
              }}
            >
              <Typography
                sx={{
                  width: 49,
                  height: 49,
                  fontFamily: "Roboto",
                  fontWeight: 400,
                  fontSize: 11.1271,
                  textAlign: "center",
                  letterSpacing: 0.01,
                }}
              >
                Chaco
              </Typography>
              <Typography
                sx={{
                  width: 49,
                  height: 49,
                  fontFamily: "Roboto",
                  fontWeight: 400,
                  fontSize: 11.1271,
                  textAlign: "center",
                  letterSpacing: 0.01,
                }}
              >
                Rajesh
              </Typography>
              <Typography
                sx={{
                  width: 49,
                  height: 49,
                  fontFamily: "Roboto",
                  fontWeight: 400,
                  fontSize: 11.1271,
                  textAlign: "center",
                  letterSpacing: 0.01,
                }}
              >
                Ayaz
              </Typography>
              <Typography
                sx={{
                  width: 49,
                  height: 49,
                  fontFamily: "Roboto",
                  fontWeight: 400,
                  fontSize: 11.1271,
                  textAlign: "center",
                  letterSpacing: 0.01,
                }}
              >
                Rubeel
              </Typography>
              <Typography
                sx={{
                  width: 49,
                  height: 49,
                  fontFamily: "Roboto",
                  fontWeight: 400,
                  fontSize: 11.1271,
                  textAlign: "center",
                  letterSpacing: 0.01,
                }}
              >
                Junaid
              </Typography>
            </Stack>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                borderRadius: 9,
                width: 334,
                borderColor: "#999898",
                borderStyle: "solid",
                borderWidth: 1,
                mx: 2,
              }}
            >
              <IconButton
                edge="start"
                sx={{
                  ml: 1,
                }}
              >
                <SearchOutlined
                  sx={{
                    color: "black",
                  }}
                />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search by Number or Name"
                inputProps={{ "aria-label": "Search by Number or Name" }}
              />
            </Paper>
            <Stack
              direction="row"
              spacing={3}
              sx={{
                m: 3,
              }}
            >
              <Typography
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  bgcolor: "#2847A1",
                  fontFamily: "Roboto",
                  fontWeight: 400,
                  color: "#FFFFFF",
                  fontSize: 15.7212,
                  textAlign: "center",
                  letterSpacing: 0.01,
                }}
              >
                Ra
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  fontWeight: 400,
                  fontSize: 13.692,
                  letterSpacing: 0.01,
                }}
              >
                Rajesh Khanna SVU
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontWeight: 400,
                    fontSize: 12.1208,
                    letterSpacing: 0.01,
                  }}
                >
                  +91 9543543437
                </Typography>
              </Typography>
              <Typography
                sx={{
                  position: "absolute",
                  left: 304,
                  borderRadius: 18,
                  width: 64,
                  height: 25,
                  borderStyle: "solid",
                  borderWidth: 1,
                  borderColor: "#2847A1",
                  fontFamily: "Roboto",
                  fontWeight: 400,
                  fontSize: 13.692,
                  textAlign: "center",
                  letterSpacing: 0.01,
                  color: "#2847A1",
                }}
              >
                Invite
              </Typography>
            </Stack>
            <Stack
              direction="row"
              spacing={3}
              sx={{
                m: 3,
              }}
            >
              <Typography
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  bgcolor: "#2847A1",
                  fontFamily: "Roboto",
                  fontWeight: 400,
                  color: "#FFFFFF",
                  fontSize: 15.7212,
                  textAlign: "center",
                  letterSpacing: 0.01,
                }}
              >
                Ra
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  fontWeight: 400,
                  fontSize: 13.692,
                  letterSpacing: 0.01,
                }}
              >
                Rajesh Khanna SVU
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontWeight: 400,
                    fontSize: 12.1208,
                    letterSpacing: 0.01,
                  }}
                >
                  +91 9543543437
                </Typography>
              </Typography>
              <Typography
                sx={{
                  position: "absolute",
                  left: 304,
                  borderRadius: 18,
                  width: 64,
                  height: 25,
                  borderStyle: "solid",
                  borderWidth: 1,
                  borderColor: "#2847A1",
                  fontFamily: "Roboto",
                  fontWeight: 400,
                  fontSize: 13.692,
                  textAlign: "center",
                  letterSpacing: 0.01,
                  color: "#2847A1",
                }}
              >
                Invite
              </Typography>
            </Stack>
            <Stack
              direction="row"
              spacing={3}
              sx={{
                m: 3,
              }}
            >
              <Typography
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  bgcolor: "#2847A1",
                  fontFamily: "Roboto",
                  fontWeight: 400,
                  color: "#FFFFFF",
                  fontSize: 15.7212,
                  textAlign: "center",
                  letterSpacing: 0.01,
                }}
              >
                Ra
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  fontWeight: 400,
                  fontSize: 13.692,
                  letterSpacing: 0.01,
                }}
              >
                Rajesh Khanna SVU
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontWeight: 400,
                    fontSize: 12.1208,
                    letterSpacing: 0.01,
                  }}
                >
                  +91 9543543437
                </Typography>
              </Typography>
              <Typography
                sx={{
                  position: "absolute",
                  left: 304,
                  borderRadius: 18,
                  width: 64,
                  height: 25,
                  borderStyle: "solid",
                  borderWidth: 1,
                  borderColor: "#2847A1",
                  fontFamily: "Roboto",
                  fontWeight: 400,
                  fontSize: 13.692,
                  textAlign: "center",
                  letterSpacing: 0.01,
                  color: "#2847A1",
                }}
              >
                Invite
              </Typography>
            </Stack>
            <Stack
              direction="row"
              spacing={3}
              sx={{
                m: 3,
              }}
            >
              <Typography
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  bgcolor: "#2847A1",
                  fontFamily: "Roboto",
                  fontWeight: 400,
                  color: "#FFFFFF",
                  fontSize: 15.7212,
                  textAlign: "center",
                  letterSpacing: 0.01,
                }}
              >
                Ra
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  fontWeight: 400,
                  fontSize: 13.692,
                  letterSpacing: 0.01,
                }}
              >
                Rajesh Khanna SVU
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontWeight: 400,
                    fontSize: 12.1208,
                    letterSpacing: 0.01,
                  }}
                >
                  +91 9543543437
                </Typography>
              </Typography>
              <Typography
                sx={{
                  position: "absolute",
                  left: 304,
                  borderRadius: 18,
                  width: 64,
                  height: 25,
                  borderStyle: "solid",
                  borderWidth: 1,
                  borderColor: "#2847A1",
                  fontFamily: "Roboto",
                  fontWeight: 400,
                  fontSize: 13.692,
                  textAlign: "center",
                  letterSpacing: 0.01,
                  color: "#2847A1",
                }}
              >
                Invite
              </Typography>
            </Stack>
            <Stack
              direction="row"
              spacing={3}
              sx={{
                m: 3,
              }}
            >
              <Typography
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  bgcolor: "#2847A1",
                  fontFamily: "Roboto",
                  fontWeight: 400,
                  color: "#FFFFFF",
                  fontSize: 15.7212,
                  textAlign: "center",
                  letterSpacing: 0.01,
                }}
              >
                Ra
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  fontWeight: 400,
                  fontSize: 13.692,
                  letterSpacing: 0.01,
                }}
              >
                Rajesh Khanna SVU
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontWeight: 400,
                    fontSize: 12.1208,
                    letterSpacing: 0.01,
                  }}
                >
                  +91 9543543437
                </Typography>
              </Typography>
              <Typography
                sx={{
                  position: "absolute",
                  left: 304,
                  borderRadius: 18,
                  width: 64,
                  height: 25,
                  borderStyle: "solid",
                  borderWidth: 1,
                  borderColor: "#2847A1",
                  fontFamily: "Roboto",
                  fontWeight: 400,
                  fontSize: 13.692,
                  textAlign: "center",
                  letterSpacing: 0.01,
                  color: "#2847A1",
                }}
              >
                Invite
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Refer;
