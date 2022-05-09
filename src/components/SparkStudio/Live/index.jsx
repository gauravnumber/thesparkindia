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
import UpcomingLives from "./UpcomingLives";

const Live = () => {
  return (
    <>
      <CurrentLives />
      <RecentLiveVideos />
      <UpcomingLives />
    </>
  );
};

export default Live;
