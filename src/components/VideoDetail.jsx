
import React from "react";
import { Paper, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion"; // Framer Motion for animations

const VideoDetail = ({ video }) => {
  if (!video || !video.id) {
    return <div>Loading...</div>;
  }

  const { title, channelTitle, description } = video.snippet;
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper
            sx={{
              borderRadius: "15px",
              overflow: "hidden",
              backgroundColor: "#121212",
              padding: 2,
            }}
          >
            <iframe
              src={videoSrc}
              style={{
                width: "100%",
                height: "500px",
                border: "none",
                borderRadius: "12px",
              }}
              title="Video Player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ padding: 3, backgroundColor: "#1e1e1e", borderRadius: "12px" }}>
            <Typography variant="h5" sx={{ color: "#fff", fontWeight: "bold" }}>
              {title}
            </Typography>
            <Typography variant="body1" sx={{ color: "#bbb", marginTop: 1 }}>
              {description}
            </Typography>
            <Typography variant="body2" sx={{ color: "#aaa", marginTop: 2 }}>
              Channel: {channelTitle}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default VideoDetail;
