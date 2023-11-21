// import {Grid, Paper, Typography, useMediaQuery } from "@mui/material";

// const VideoDetail = ({ video }) => {
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
//     <Grid container spacing={2}>
//       <Paper isSmallScreen={isSmallScreen}>
//         <iframe
//           src={videoSrc}
         
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             width: "100%",
//             borderRadius: "15px",
//             backgroundColor: "lightGray",
//             height: "100%",
//             padding:"50%"
//           }}
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           title="video player"
//         />
//       </Paper>
//       <div>
//         <Paper elevation={7} style={{ padding: "5px", fontSize:"16px" }}>
//           <Typography variant="h5">
//             {title} - {channelTitle}
//           </Typography>
//           <Typography variant="body1">{channelTitle}</Typography>
//           <Typography variant="body2">{description}</Typography>
//         </Paper>
//       </div>
//     </Grid>
//   );
// };

// export default VideoDetail;
import PropTypes from "prop-types";

import { Grid, Paper, Typography, useMediaQuery } from "@mui/material";

const VideoDetail = ({ video }) => {
  VideoDetail.propTypes = {
    video: PropTypes.shape({
      snippet: PropTypes.object,
      id: PropTypes.object,

      // Define the shape of the snippet object
      // Add other expected properties within video if needed
    }),
  };
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  if (!video) {
    return <div>Loading...</div>;
  }

  const {
    id: { videoId },
    snippet: { title, channelTitle, description },
  } = video;

  if (!videoId) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "30vh",
          width: "100%",
          fontWeight: "bold",
          marginLeft: "30%",
          fontSize: "20px",
          borderRadius: "15px",
          backgroundColor: "lightGray",
        }}
      >
        Enjoy exploring amazing videos
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${videoId}`;

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={12}>
        <Paper style={{ height: isSmallScreen ? "auto" : "60vh" }}>
          <iframe
            src={videoSrc}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "15px",
              backgroundColor: "lightGray",
            }}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title="video player"
          />
        </Paper>
        {!isSmallScreen && (
          <Paper style={{
            height: "auto",
            marginTop: "20px", padding: "15px"
          }}>
            <Typography variant="h5">
              {title} - {channelTitle}
            </Typography>
            <Typography variant="body1">{channelTitle}</Typography>
            <Typography variant="body2">{description}</Typography>
          </Paper>
        )}
      </Grid>
      {isSmallScreen && (
        <Grid item xs={12}>
          <Paper
            style={{
              height: "auto",
              padding: "8px",
              textAlign: "center",
              width: "100%",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "wrap",
            }}
          >
         
            
            <Typography variant="h5">
              {title} - {channelTitle}
            </Typography>
            <Typography variant="body1">{channelTitle}</Typography>
            <Typography variant="body2">{description}</Typography>
          </Paper>
        </Grid>
      )}
    </Grid>
  );
};

export default VideoDetail;

