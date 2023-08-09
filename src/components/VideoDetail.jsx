// import { Paper, Typography } from "@mui/material";
// import React from "react";

// const VideoDetail = ({ video }) => {
//   const {
//     id: { videoId },
//     snippet: { title, channelTitle, description },
//   } = video;

//   if (!videoId) {
//     return <div>Type in search box please</div>;
//   }

//   const videoSrc = `https://www.youtube.com/embed/${videoId}`;

//   return (
//     <>
//       <Paper elevation={7}  style={{ height:"70%" }}>
//         <iframe
//           src={videoSrc}
//           frameBorder="0"
//           height="70%"
//           width="100%"
//           title="video player"
//         />
//       </Paper>
//       <Paper elevation={6} style={{ padding:"20px" }}>
//         <Typography variant="h4">
//           {title}-{channelTitle}
//         </Typography>
//         <Typography variant="body1">{channelTitle}</Typography>
//         <Typography variant="body2">{description}</Typography>
//       </Paper>
//     </>
//   );
// };

// export default VideoDetail;

import { Paper, Typography } from "@mui/material";
import React from "react";

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
      <Paper elevation={6} style={{ height: "50%" }}>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
        />
      </Paper>
      <Paper elevation={6} style={{ padding: "15px" }}>
        <Typography variant="h4">
          {title} - {channelTitle}
        </Typography>
        <Typography variant="subtitle1">{channelTitle}</Typography>
        <Typography variant="subtitle2">{description}</Typography>
      </Paper>
    </>
  );
};

export default VideoDetail;