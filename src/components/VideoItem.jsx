import React from "react";
import { Paper, Typography, useMediaQuery } from "@mui/material";

const VideoItem = ({ video, onSelectVideo }) => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  return (
    <Paper
      onClick={() => onSelectVideo(video)}
      elevation={6}
      style={{
        cursor: "pointer",
        borderRadius: "10px",
        overflow: "hidden",
        marginBottom: "20px",
        transition: "all 0.3s ease", // Smooth transition for hover effects
      }}
    >
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "10px",
          objectFit: "cover",
        }}
      />
      <Typography
        variant="subtitle1"
        style={{
          textAlign: "center",
          padding: "10px 0",
          fontWeight: "bold",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {video.snippet.title}
      </Typography>
      <Typography
        variant="body2"
        style={{
          textAlign: "center",
          fontSize: "12px",
          color: "#555",
          paddingBottom: "10px",
        }}
      >
        {video.snippet.description}
      </Typography>
    </Paper>
  );
};

export default VideoItem;
