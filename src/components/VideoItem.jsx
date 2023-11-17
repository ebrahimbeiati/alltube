

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




// import React from "react";
// import { Paper, Typography, Grid } from "@mui/material";
// import useMediaQuery from "@mui/material/useMediaQuery";

// const VideoItem = ({ video, onSelectVideo }) => {
//   const isSmallScreen = useMediaQuery("(max-width: 600px)");

//   return (
//     <Grid container spacing={isSmallScreen ? 2 : 0}>
//       {" "}
//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           width: "100%",
//         }}
//       >
//         <Grid item xs={14}>
//           <Paper
//             elevation={6}
//             style={{
//               display: "flex",
//               flexWrap: "wrap",
//               cursor: "pointer",
//               "&:hover": {
//                 transform: "scale(1.03)",
//                 boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
//               },
//             }}
//             onClick={() => onSelectVideo(video)}
//           >
//             <img
//               style={{ width: "75%", borderRadius: "8px" }}
//               alt="thumbnail"
//               src={video.snippet.thumbnails.medium.url}
//             />
//             <Typography
//               variant="subtitle1"
//               style={{
//                 fontWeight: "bold",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 width: "100%",
//                 padding: "1px",
//                 borderRadius: "10px",
//                 transition: "transform 0.2s ease-in-out",
//                 cursor: "pointer",
//                 "&:hover": {
//                   transform: "scale(1.03)",
//                   boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
//                 },
//               }}
//             >
//               {video.snippet.title}
//             </Typography>
//           </Paper>
//         </Grid>
//       </div>
//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           width: "100%",
//           padding: "2px",
//           marginBottom: "1px",
//           borderRadius: "10px",
//           cursor: "pointer",
//           "&:hover": {
//             transform: "scale(1.03)",
//             boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
//           },
//         }}
//       >
//         <Grid item xs={12}>
//           <Paper
//             elevation={13}
//             style={{
//               display: "flex",
//               flexWrap: "wrap",
//               alignItems: "center",
//               width: "100%",
//               padding: "1px",
//               marginBottom: "1px",
//               borderRadius: "10px",
//             }}
//             onClick={() => onSelectVideo(video)}
//           >
//             <Typography
//               variant="body3"
//               color="textSecondary"
//               style={{
//                 display: "flex",
//                 flexWrap: "wrap",
//                 alignItems: "center",
//                 width: "100%",
//                 padding: "1px",
//                 borderRadius: "15px",
//                 cursor: "pointer",
//                 "&:hover": {
//                   boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
//                 },
//               }}
//             >
//               {video.snippet.description}
//             </Typography>
//           </Paper>
//         </Grid>
//       </div>
//     </Grid>
//   );
// };

// export default VideoItem;
// import React from "react";
// import { Paper, Typography, Grid } from "@mui/material";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import VideoDetail from "./VideoDetail";

// const VideoItem = ({ video, onSelectVideo }) => {
//   const isSmallScreen = useMediaQuery("(max-width: 600px)");

//   return (
//     <Grid container spacing={isSmallScreen ? 2 : 0}>
//       <Grid item xs={12}>
//         <Paper
//           elevation={6}
//           style={{
//             display: "flex",
//             alignItems: "center",
//             width: "100%",
//             marginBottom: "5px",
//             borderRadius: "10px",
//             cursor: "pointer",
//             "&:hover": {
//               transform: "scale(1.03)",
//               boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
//             },
//           }}
//           onClick={() => onSelectVideo(video)}
//         >
//           <img
//             style={{ width: "100%", borderRadius: "8px" }}
//             alt="thumbnail"
//             src={video.snippet.thumbnails.medium.url}
//           />
//           <Typography
//             variant="subtitle1"
//             style={{
//               fontWeight: "bold",
//               padding: "10px",
//               width: "100%",
//             }}
//           >
//             {video.snippet.title}
//           </Typography>
//         </Paper>
//       </Grid>
//       {!isSmallScreen && VideoDetail && (

//         <Grid item xs={10}>
//           <Paper
//             elevation={6}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               width: "100%",
//               marginTop: "10px",
//               borderRadius: "10px",
//             }}
//             onClick={() => onSelectVideo(video)}
//           >
//             <Typography
//               variant="body2"
//               color="textSecondary"
//               style={{
//                 padding: "10px",
//                 width: "100%",
//               }}
//             >
//               {video.snippet.description}
//             </Typography>
//           </Paper>
//         </Grid>
//       )}
//     </Grid>
//   );
// };

// export default VideoItem;

import React from "react";
import { Paper, Typography, Grid } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const VideoItem = ({ video, onSelectVideo }) => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  return (
    <Grid container spacing={isSmallScreen ? 2 : 0}>
      <Grid item xs={12}>
        <Paper
          elevation={6}
          style={{
            
            flexDirection: isSmallScreen ? "column" : "row",
            alignItems: "center",
            width: "100%",
            height:"50vh",
            marginTop: "5px",
            borderRadius: "10px",
            cursor: "pointer",
            "&:hover": {
              transform: "scale(1.03)",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            },
          }}
     
          onClick={() => onSelectVideo(video)}
        >
          <img
            style={{
              width: isSmallScreen ? "100%" : "100%",
              borderRadius: "8px",
            }}
            alt="thumbnail"
            src={video.snippet.thumbnails.medium.url}
          />
          <Typography
            variant="subtitle1"
            style={{
              fontWeight: "bold",
              padding: "10px",
              width: isSmallScreen ? "100%" : "60%",
            }}
          >
            {video.snippet.title}
          </Typography>
        </Paper>
      </Grid>
      {!isSmallScreen && (
        <Grid item xs={12}>
          <Paper
            elevation={6}
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              marginBottom: "10px",
              borderRadius: "10px",
            }}
            onClick={() => onSelectVideo(video)}
          >
           
          </Paper>
        </Grid>
      )}
    </Grid>
  );
};

export default VideoItem;
