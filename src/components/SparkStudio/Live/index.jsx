import { TvOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Stack,
} from "@mui/material";

import CurrentLives from "./CurrentLives";
import RecentLiveVideos from "./RecentLiveVideos";

const Live = () => {
  const redColor = "#d90000";
  const blackColor = "#1e1e1e";
  const sparkBlue = "#2847a1";

  return (
    <>
      <CurrentLives />
      <RecentLiveVideos />
    </>
  );
};

export default Live;
