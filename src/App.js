import React, { useState } from "react";
import { Grid } from "@mui/material";
import youtube from "./api/youtube";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

// Correct import for VideoDetail component

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({ id: {}, snippet: {} });

  async function handleSubmit(searchItem) {
    const {
      data: { items: videos },
    } = await youtube.get("/search", {
      params: {
        part: "snippet",
        maxResults: 8,
        key: process.env.REACT_APP_API_KEY,
        q: searchItem,
      },
    });

    setVideos(videos);
    setSelectedVideo(videos[0]);
  }

  return (
    <Grid container textAlign="center" justifyContent="center" spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={11}>
          <Grid item xs={12}>
            <SearchBar onSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
// App.js

// import React, { useState, useEffect } from 'react';
// import SearchBar from './components/SearchBar';
// import VideoDetail from './components/VideoDetail';
// import VideoList from './components/VideoList';
// import youtube from './api/youtube';
// import { Container, Grid, Typography } from '@mui/material';
// import { useMediaQuery } from '@mui/material';
// import './index.css';

// function App() {
//   const [videos, setVideos] = useState([]);
//   const [selectedVideo, setSelectedVideo] = useState(null);
//   const [recommendedVideos, setRecommendedVideos] = useState([]);
//     const isSmallScreen = useMediaQuery("(max-width: 600px)");


//   useEffect(() => {
//     async function fetchRecommendedVideos() {
//       try {
//         const response = await youtube.get("/search", {
//           params: {
//             part: "snippet",
//             maxResults: 20,
//             key: process.env.REACT_APP_API_KEY,
//             type: "video",
//             q: "recommended",
//           },
//         });

//         setRecommendedVideos(response.data.items || []);
//       } catch (error) {
//         console.error("Error fetching recommended videos:", error);
//       }
//     }

//     fetchRecommendedVideos();
//   }, []);

//   const handleSubmit = async (searchTerm) => {
//     try {
//       const response = await youtube.get("/search", {
//         params: {
//           part: "snippet",
//           maxResults: 20,
//           key: process.env.REACT_APP_API_KEY,

//           type: "video",
//           q: searchTerm,
//         },
//       });

//       setVideos(response.data.items || []);
//       setSelectedVideo(response.data.items[0]);
//     } catch (error) {
//       console.error("Error fetching videos:", error);
//     }
//   };
//   return (
    
//       <Container>
//         <Typography variant="h3" align="center" gutterBottom>
//           Welcome to My Video App
//         </Typography>
//         <SearchBar onSubmit={handleSubmit} />
//         <Grid container spacing={4}>
//           <Grid item xs={12} md={8}>
//             <VideoDetail video={selectedVideo} />
//             <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
//           </Grid>

//           <Grid item xs={12} md={4}>
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: isSmallScreen ? "column" : "row",
//                 alignItems: "center",
//                 width: "100%",
//               marginTop: "5px",
//                 marginBottom:"5px",
//                 borderRadius: "10px",
//                 cursor: "pointer",
//                 padding: "10px",
//                 backgroundColor: "#f9f9f9",
//               }}
//             >
             
//               <VideoList
//                 videos={recommendedVideos}
//                 onVideoSelect={setRecommendedVideos}
//               />
//             </div>
//           </Grid>
//         </Grid>
//       </Container>
    
//   );
// }

// export default App;