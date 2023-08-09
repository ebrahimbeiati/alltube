import { Paper, Typography } from "@mui/material";
import React from "react";

const VideoDetail = ({ video }) => {
  const {
    id: { videoId },
    snippet: { title, channelTitle, description },
  } = video;

  if (!videoId) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${videoId}`;

  return (
    <>
      <Paper elevation={3} sx={{ p: 2 }} style={{ height: "70%" }}>
        <iframe
          src={videoSrc}
          frameBorder="0"
          height="100%"
          width="100%"
          title="video player"
        />
      </Paper>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2">{channelTitle}</Typography>
        <Typography variant="body2">{description}</Typography>
      </Paper>
    </>
  );
};

export default VideoDetail;
