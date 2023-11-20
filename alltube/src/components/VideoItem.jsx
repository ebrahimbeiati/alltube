
import { Grid, Paper, Typography, useMediaQuery } from "@mui/material";

const VideoItem = ({ video, onSelectVideo }) => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  return (
    <Grid container spacing={isSmallScreen ? 2 : 0}>
      <Grid item xs={12}>
        <Paper
          elevation={6}
          style={{
            height: isSmallScreen ? "auto" : "200px",
            marginTop: "8px",
            borderRadius: "10px",
            cursor: "pointer",
            "&:hover": {
             
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            },
          }}
          onClick={() => onSelectVideo(video)}
        >
          <img
            style={{
              width: "100%",
              height: isSmallScreen ? "auto" : "100px",
              borderRadius: "8px",
              objectFit: "cover",
              display:"flex",
            }}
            alt="thumbnail"
            src={video.snippet.thumbnails.medium.url}
          />
          <Typography
            variant="subtitle1"
            style={{
              fontWeight: "bold",
              padding: "20px",
              textAlign: "center",
              width: "100%",
              
            }}
          >
            {video.snippet.title}
          </Typography>
        </Paper>
      </Grid>
      {/* Add rest of the Grid items as needed */}
    </Grid>
  );
};

export default VideoItem;