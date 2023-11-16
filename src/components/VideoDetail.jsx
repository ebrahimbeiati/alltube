import { Paper, Typography } from "@mui/material";
import React,{useEffect, useState} from "react";



const VideoDetail = ({ video }) => {
  
  const {
    id: { videoId },
    snippet: { title, channelTitle, description },
  } = video;

  if (!videoId) {
    return <div>Type in search box please</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${videoId}`;

  return (
    <>
      <Paper elevation={7}  style={{ height:"70%" }}>
        <iframe
          src={videoSrc}
          frameBorder="0"
          height="70%"
          width="100%"
          title="video player"
        />
      </Paper>
      <Paper elevation={6} style={{ padding:"20px" }}>
        <Typography variant="h4">
          {title}-{channelTitle}
        </Typography>
        <Typography variant="body1">{channelTitle}</Typography>
        <Typography variant="body2">{description}</Typography>
      </Paper>
    </>
  );
};

export default VideoDetail;
/////////////////////////////////////////////////////

