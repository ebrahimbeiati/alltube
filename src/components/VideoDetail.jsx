// import { Paper, Typography } from "@mui/material";
// import useMediaQuery from "@mui/material/useMediaQuery";

// const VideoDetail = ({ video }) => {
//   if (!video) {
//     return <div>Loading...</div>; // Or any placeholder or loading indicator
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
//           height: "20vh",
//           width: "100%",
//           fontWeight: "bold",
//           marginLeft: "30%",
//           fontSize: "30px",
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
//     <>
//       <Paper elevation={7} style={{ width: "100%", height: "20%" }}>
//         <iframe
//           src={videoSrc}
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//           style={{ width: "100%", height: "100%" }}
//           title="video player"
//         />
//       </Paper>
//       <div
//         style={{
//           padding: "3px",
//         }}
//       >
//         <Paper elevation={6} style={{ padding: "10px" }}>
//           <Typography variant="h5">
//             {title}-{channelTitle}
//           </Typography>
//           <Typography variant="body1">{channelTitle}</Typography>
//           <Typography variant="body2">{description}</Typography>
//         </Paper>
//       </div>
//     </>
//   );
// };

// export default VideoDetail;

import { Paper, Typography, useMediaQuery } from "@mui/material";

const VideoDetail = ({ video }) => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  if (!video) {
    return <div>Loading...</div>; // Or any placeholder or loading indicator
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
    <>
      <Paper
        elevation={12}
        style={{ width: "100%", height: isSmallScreen ? "40%" : "30%" }}
      >
        <iframe
          src={videoSrc}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         
          style={{ width: "100%", height: "50%" }}
          title="video player"
        />
      </Paper>
      <div
        style={{
          padding: "3px",
        }}
      >
        <Paper elevation={7} style={{ padding: "10px" }}>
          <Typography variant="h5">
            {title}-{channelTitle}
          </Typography>
          <Typography variant="body1">{channelTitle}</Typography>
          <Typography variant="body2">{description}</Typography>
        </Paper>
      </div>
    </>
  );
};

export default VideoDetail;
