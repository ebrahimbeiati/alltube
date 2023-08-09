import React from "react";
import { Grid, Paper, Typography } from "@mui/material";




const VideoItem =({video, onSelectVideo})=>{
    return (
      <Grid item xs={12}>
        <Paper
          elevation={6}
          style={{
            padding: "15px",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => onSelectVideo(video)}
        >
          <img
            style={{ marginRight: "20px" }}
            alt="thumbnail"
            src={video.snippet.thumbnails.medium.url}
          />

          <Typography variant="subtitle1">{video.snippet.title}</Typography>
        </Paper>
      </Grid>
    );
}
export default VideoItem;