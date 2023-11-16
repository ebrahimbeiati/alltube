import React from "react";
import { Paper, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const VideoItem = ({ video, onSelectVideo }) => {
 
  const isSmallScreen = useMediaQuery("(max-width: 600px)");


  return (
    <>
      <Paper
        elevation={6}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "300px",
          padding: "5px",
          marginBottom: "10px",
          borderRadius: "10px",
          transition: "transform 0.2s ease-in-out",
          cursor: "pointer",
          "&:hover": {
            transform: "scale(1.03)",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          },
        }}
        onClick={() => onSelectVideo(video)}
      >
        <img
          style={{ width: "100%", marginBottom: "10px", borderRadius: "8px" }}
          alt="thumbnail"
          src={video.snippet.thumbnails.medium.url}
        />
        <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
          {video.snippet.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {video.snippet.description}
        </Typography>
      </Paper>

      {isSmallScreen && (
        <Paper
          elevation={6}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "300px",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "10px",
            transition: "transform 0.2s ease-in-out",
            cursor: "pointer",
            "&:hover": {
              transform: "scale(1.03)",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            },
          }}
          onClick={() => onSelectVideo(video)}
        >
          <img
            style={{ width: "100%", marginBottom: "10px", borderRadius: "8px" }}
            alt="thumbnail"
            src={video.snippet.thumbnails.medium.url}
          />
          <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
            {video.snippet.title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {video.snippet.description}
          </Typography>
        </Paper>
      )}
    </>
  );
};

export default VideoItem;

// import React from "react";
// import { Paper, Typography } from "@mui/material";
// import useMediaQuery from "@mui/material/useMediaQuery";

// const VideoItem = ({ video, onSelectVideo }) => {
//   const isSmallScreen = useMediaQuery("(max-width: 600px)");

//   const mainVideo = (
//     <Paper
//       elevation={6}
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         width: "300px",
//         padding: "5px",
//         marginBottom: "20px",
//         borderRadius: "10px",
//         transition: "transform 0.2s ease-in-out",
//         cursor: "pointer",
//         "&:hover": {
//           transform: "scale(1.03)",
//           boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
//         },
//       }}
//       onClick={() => onSelectVideo(video)}
//     >
//       {/* Main video content */}
//       <img
//         style={{ width: "100%", marginBottom: "10px", borderRadius: "8px" }}
//         alt="thumbnail"
//         src={video.snippet.thumbnails.medium.url}
//       />
//       <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
//         {video.snippet.title}
//       </Typography>
//       <Typography variant="body2" color="textSecondary">
//         {video.snippet.description}
//       </Typography>
//     </Paper>
//   );

//   const sideVideos = (
//     <div
    
//     >
//       {/* Side videos content */}
//       <Paper
//         elevation={6}
//         style={{
//           width: "300px",
//           padding: "5px",
//           marginBottom: "5px",
//           borderRadius: "5px",
//           transition: "transform 0.2s ease-in-out",
//           cursor: "pointer",
//           "&:hover": {
//             transform: "scale(1.03)",
//             boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
//           },
//         }}
//         onClick={() => onSelectVideo(video)}
//       >
//         <img
//           style={{ width: "100%", marginBottom: "5px", borderRadius: "8px" }}
//           alt="thumbnail"
//           src={video.snippet.thumbnails.medium.url}
//         />
//         <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
//           {video.snippet.title}
//         </Typography>
//         <Typography variant="body2" color="textSecondary">
//           {video.snippet.description}
//         </Typography>
//       </Paper>
//       {/* Add more side videos as needed */}
//     </div>
//   );

//   return (
//     <div
//       style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
//     >
//       {mainVideo}
//       {isSmallScreen && sideVideos}
//     </div>
//   );
// };

// export default VideoItem;
