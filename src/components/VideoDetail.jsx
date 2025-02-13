// import PropTypes from "prop-types";

//import { Grid, Paper, Typography, useMediaQuery } from "@mui/material";

// const VideoDetail = ({ video }) => {
//   VideoDetail.propTypes = {
//     video: PropTypes.shape({
//       snippet: PropTypes.object,
//       id: PropTypes.object,
//     }),
//   };
//   const isSmallScreen = useMediaQuery("(max-width: 600px)");

//   if (!video) {
//     return <div>Loading...</div>;
//   }

//   const {
//     id: { videoId },
//     snippet: { title, channelTitle, description },
//   } = video;

//   if (!videoId) {
//     return (
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           height: "30vh",
//           width: "100%",
//           fontWeight: "bold",
//           marginLeft: "30%",
//           fontSize: "20px",
//           borderRadius: "15px",
//           backgroundColor: "lightGray",
//         }}
//       >
//         Enjoy exploring amazing videos
//       </div>
//     );
//   }

//   const videoSrc = `https://www.youtube.com/embed/${videoId}`;

//   return (
//     <Grid className="container" spacing={1}>
//       <Grid item xs={12} sm={12}>
//         <Paper style={{ height: isSmallScreen ? "auto" : "60vh" }}>
//           <iframe
//             src={videoSrc}
//             style={{
//               width: "100%",
//               height: "100%",
//               borderRadius: "15px",
//               backgroundColor: "lightGray",
//             }}
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             title="video player"
//           />
//         </Paper>
//         {!isSmallScreen && (
//           <Paper style={{
//             height: "auto",
//             marginTop: "20px", padding: "15px"
//           }}>
//             <Typography variant="h5">
//               {title} - {channelTitle}
//             </Typography>
//             <Typography variant="body1">{channelTitle}</Typography>
//             <Typography variant="body2">{description}</Typography>
//           </Paper>
//         )}
//       </Grid>
//       {isSmallScreen && (
//         <Grid item xs={12}>
//           <Paper
//             style={{
//               height: "auto",
//               padding: "8px",
//               textAlign: "center",
//               width: "100%",
//               overflow: "hidden",
//               textOverflow: "ellipsis",
//               whiteSpace: "wrap",
//             }}
//           >
         
            
//             <Typography variant="h5">
//               {title} - {channelTitle}
//             </Typography>
//             <Typography variant="body1">{channelTitle}</Typography>
//             <Typography variant="body2">{description}</Typography>
//           </Paper>
//         </Grid>
//       )}
//     </Grid>
//   );
// };

// export default VideoDetail;
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
                height: "400px",
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
