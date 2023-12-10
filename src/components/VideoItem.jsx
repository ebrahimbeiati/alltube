// import React from "react";
// import { Grid,Paper, Typography, useMediaQuery } from "@mui/material";

// const VideoItem = ({ video, onSelectVideo }) => {
//   const isSmallScreen = useMediaQuery("(max-width: 600px)");


//   return (
//     <Grid container spacing={2}>
//   <Grid item xs={8}>
//     <Paper
//     isSmallScreen={isSmallScreen}
//           onClick={() => onSelectVideo(video)}> <img
//             src={video.snippet.thumbnails.medium.url}
//             alt="thumbnail"
//             className="
//               width: 100%,"
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               width: "100%",
//             }}/>
//             </Paper>
//   </Grid>
//   <Grid item xs={4}>
//     <Typography
//        col-span-2
//             variant="subtitle1"
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               textAlign: "center",
//               width: "100%",
//             }}> {video.snippet.title}</Typography>
//   </Grid>
//   <Grid item xs={4}>
//     <Typography>xs=4</Typography>
//   </Grid>
//   <Grid item xs={8}>
//     <Paper>xs=8</Paper>
//   </Grid>
// </Grid>
//   );
// };

// export default VideoItem;
import React from "react";
import { Grid, Paper, Typography, useMediaQuery } from "@mui/material";

const VideoItem = ({ video, onSelectVideo }) => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  return (
    <Grid className="container" spacing={isSmallScreen ? 2 : 0}>
      <Grid item xs={12}>
        <Paper
          elevation={6}
          style={{
            cursor: "pointer",
            height: "100%", 
            width: "100%",
            borderRadius: "10px",
            overflow: "hidden",

            marginTop: "35px",
          }}
          onClick={() => onSelectVideo(video)}
        >
          <img
            src={video.snippet.thumbnails.medium.url}
            loading="lazy"
            alt="thumbnail"
            style={{
              width: "100%",
              height: "80%",
              objectFit: "cover",
              borderRadius: "10px",
              overflow: "hidden",

              // Add appropriate units here (e.g., '100%')
            }}
          />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="subtitle1"
          style={{
            textAlign: "center",
            width: "100%",
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
            height: "auto",
            padding: "8px",
            width: "100%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "wrap",
            marginTop: "10px",
            backgroundColor: "#f5f5f5",
            borderRadius: "5px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            color: "#333",
          }}
        >
          {video.snippet.description}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default VideoItem;
