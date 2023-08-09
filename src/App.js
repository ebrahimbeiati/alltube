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
    <Grid container justifyContent="center" spacing={10}>
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
