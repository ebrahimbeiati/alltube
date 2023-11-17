import React from "react";
import { Grid } from "@mui/material";
import VideoItem from './VideoItem';

const VideoList =({ videos, onVideoSelect})=>{
    const listOfVideos = videos.map(video=>(
        <VideoItem 
            key={video.id.videoId}
            video={video}
            onSelectVideo={onVideoSelect}
            
            />
    ));
    return (
        <Grid container spacing={4}>
            
            {listOfVideos}
        </Grid>   
    );
}
export default VideoList;

