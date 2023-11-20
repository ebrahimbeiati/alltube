import { Paper, Typography, useMediaQuery } from "@mui/material";

const VideoDetail = ({ video }) => {
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
        className="
          display: flex,
          justifyContent: center,
          alignItems: center,
          height: 30vh,
          width: 100,
          fontWeight: bold,
          marginLeft: 30%,
          fontSize: 20px,
          borderRadius: 15px,
          backgroundColor: lightGray
        "
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
        className= "width: 100%, height: isSmallScreen ? 40% : 30% "
      >
        <iframe
          src={videoSrc}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         
          className= "width: 100%, height: 50%" 
          title="video player"
        />
      </Paper>
      <div
      >
        <Paper elevation={7} className=" padding: 10px" >
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
