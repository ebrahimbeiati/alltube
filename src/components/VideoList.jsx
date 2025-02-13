import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-6 p-4 max-w-[1400px] mx-auto">
      {videos.map((video) => (
        <div
          key={video.id.videoId}
          className="transition-transform duration-300 ease-in-out transform hover:scale-105"
        >
          <VideoItem video={video} onSelectVideo={onVideoSelect} />
        </div>
      ))}
    </div>
  );
};

export default VideoList;
