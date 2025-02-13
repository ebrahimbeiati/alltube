
import React, { useState, useEffect } from "react";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import SearchBar from "./components/SearchBar";
import youtube from "./api/youtube";

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Fetch random videos when the page loads
  useEffect(() => {
    fetchRandomVideos();
  }, []);

  async function fetchRandomVideos() {
    const {
      data: { items },
    } = await youtube.get("/search", {
      params: {
        part: "snippet",
        maxResults: 8,
        key: import.meta.env.VITE_REACT_APP_API_KEY,
        q: getRandomQuery(), // Get a random query for diverse results
      },
    });

    setVideos(items);
    setSelectedVideo(items[0]); // Show the first video by default
  }

  // Generate a random search query
  function getRandomQuery() {
    const queries = [
      "technology",
      "music",
      "gaming",
      "football",
      "cooking",
      "travel",
      "movies",
      "trending",
      "space",
      "AI",
    ];
    return queries[Math.floor(Math.random() * queries.length)];
  }

  async function handleSubmit(searchItem) {
    const {
      data: { items },
    } = await youtube.get("/search", {
      params: {
        part: "snippet",
        maxResults: 8,
        key: import.meta.env.VITE_REACT_APP_API_KEY,
        q: searchItem,
      },
    });

    setVideos(items);
    setSelectedVideo(items[0]); // Show first result
  }

  return (
    <div className="flex flex-col items-center bg-gradient-to-br  from-black via-purple-700 to-blue-700 ">
      <SearchBar onSubmit={handleSubmit} />
      <div className="grid grid-cols-1 ml-2 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full max-w-auto">
        <div className="md:col-span-2">
          <VideoDetail video={selectedVideo} />
        </div>
        <div>
          <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
        </div>
      </div>
    </div>
  );
}

export default App;
