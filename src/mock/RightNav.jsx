import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";
import styled from "styled-components";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import CropFreeIcon from "@mui/icons-material/CropFree";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const Div = styled.div`
  display: flex;
  flex-flow: row nowrap;
  transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(-100%)")};
`;

const RightNav = ({ open }) => {
  return (
    <Div open={open}>
      <Box
        sx={{
          width: 278,
          height: 802,
          left: 0,
          top: 42,
        }}
      >
        <Box
          sx={{
            width: 278,
            height: 124,
            left: 0,
            top: 0,
            bgcolor: "#2847A1",
            position: "relative",
          }}
        >
          <Typography
            sx={{
              color: "#FFFFFF",
              position: "absolute",
              width: 43,
              height: 20,
              left: 21,
              top: 11,
            }}
          >
            Hello!
          </Typography>
          <AccountCircleRoundedIcon
            fontSize="large"
            color="action"
            sx={{
              position: "absolute",
              width: 56.57,
              height: 56.57,
              left: 17.71,
              top: 42.71,
            }}
          />
          <Typography
            sx={{
              position: "absolute",
              width: 55,
              height: 22,
              left: 96,
              top: 46,
              color: "#FFFFFF",
            }}
          >
            Junaid
          </Typography>
          <Typography
            sx={{
              position: "absolute",
              width: 101,
              height: 16,
              left: 96,
              top: 73.18,
              color: "#FFFFFF",
            }}
          >
            +919568923556
          </Typography>
        </Box>
        <Box
          sx={{
            position: "relative",
            width: 278,
            height: 48,
            left: 0,
          }}
        >
          <HomeRoundedIcon
            color="action"
            sx={{
              m: 2,
            }}
          />
          <Typography
            sx={{
              position: "absolute",
              left: 50,
              top: 0,
              m: 2,
            }}
          >
            Home
          </Typography>
        </Box>
        <Box
          sx={{
            position: "relative",
            width: 278,
            height: 48,
            left: 0,
          }}
        >
          <CategoryRoundedIcon
            color="action"
            sx={{
              m: 2,
            }}
          />
          <Typography
            sx={{
              position: "absolute",
              left: 50,
              top: 0,
              m: 2,
            }}
          >
            Category
          </Typography>
        </Box>
        <Box
          sx={{
            position: "relative",
            width: 278,
            height: 48,
            left: 0,
          }}
        >
          <VideoLibraryIcon
            color="action"
            sx={{
              m: 2,
            }}
          />
          <Typography
            sx={{
              position: "absolute",
              left: 50,
              top: 0,
              m: 2,
            }}
          >
            Studio
          </Typography>
        </Box>
        <Divider />

        <Box
          sx={{
            position: "relative",
            width: 278,
            height: 48,
            left: 0,
          }}
        >
          <CropFreeIcon
            color="action"
            sx={{
              m: 2,
            }}
          />
          <Typography
            sx={{
              position: "absolute",
              left: 50,
              top: 0,
              m: 2,
            }}
          >
            My profile
          </Typography>
        </Box>

        <Box
          sx={{
            position: "relative",
            width: 278,
            height: 48,
            left: 0,
          }}
        >
          <LocalShippingIcon
            color="action"
            sx={{
              m: 2,
            }}
          />
          <Typography
            sx={{
              position: "absolute",
              left: 50,
              top: 0,
              m: 2,
            }}
          >
            My orders
          </Typography>
        </Box>
        <Divider />
        <Box
          sx={{
            position: "relative",
            width: 278,
            height: 48,
            left: 0,
          }}
        >
          <HomeRoundedIcon
            color="action"
            sx={{
              m: 2,
            }}
          />
          <Typography
            sx={{
              position: "absolute",
              left: 50,
              top: 0,
              m: 2,
            }}
          >
            Ship with spark
          </Typography>
        </Box>
        <Box
          sx={{
            position: "relative",
            width: 278,
            height: 48,
            left: 0,
          }}
        >
          <CategoryRoundedIcon
            color="action"
            sx={{
              m: 2,
            }}
          />
          <Typography
            sx={{
              position: "absolute",
              left: 50,
              top: 0,
              m: 2,
            }}
          >
            Scan and pay
          </Typography>
        </Box>
        <Box
          sx={{
            position: "relative",
            width: 278,
            height: 48,
            left: 0,
          }}
        >
          <VideoLibraryIcon
            color="action"
            sx={{
              m: 2,
            }}
          />
          <Typography
            sx={{
              position: "absolute",
              left: 50,
              top: 0,
              m: 2,
            }}
          >
            Refer and pay
          </Typography>
        </Box>

        <Box
          sx={{
            position: "relative",
            width: 278,
            height: 48,
            left: 0,
          }}
        >
          <CropFreeIcon
            color="action"
            sx={{
              m: 2,
            }}
          />
          <Typography
            sx={{
              position: "absolute",
              left: 50,
              top: 0,
              m: 2,
            }}
          >
            Credits and Wallet
          </Typography>
        </Box>
      </Box>
    </Div>
  );
};

export default RightNav;
