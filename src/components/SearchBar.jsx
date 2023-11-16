// import { useState } from "react";
// import { Paper, TextField, Typography } from "@mui/material";
// import Button from '@mui/material/Button';

// const SearchBar = ({ onSubmit }) => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const onKeyPress = (e) => {
//     if (e.key === "Enter") {
//       onSubmit(searchTerm);
//     }
//   };

//   return (
//     <div style={{ textAlign: "center", paddingTop: "50px",textSize:"bold" }}>
//       <Typography variant="h3" gutterBottom>
//         Welcome to My Video App
//       </Typography>
//       <Paper
//         elevation={4}
//       >
//         <TextField
//           label="Search"
//           placeholder="Search"
//           style={{
//             borderRadius: "50px",
            
//           }}

//           variant="outlined"
//           fullWidth
//           value={searchTerm}
//           onChange={handleChange}
//           onKeyPress={onKeyPress}
        
//         />
       
        
//       </Paper>
//       <br />
//       <Button variant="contained" onClick={() => onSubmit(searchTerm)}>
//           Search
//         </Button>
//     </div>
//   );
// };

// export default SearchBar;



import React from "react";
import { Paper, TextField, Typography, Button } from "@mui/material";

const SearchBar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSubmit(searchTerm);
    }
  };

  const handleSubmit = () => {
    onSubmit(searchTerm);
  };

  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <Typography variant="h3" gutterBottom>
        Welcome to My Video App
      </Typography>
      <Paper elevation={4} style={{ padding: "10px", borderRadius: "20px" }}>
        <TextField
          label="Search"
          placeholder="Search"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          style={{ borderRadius: "20px" }}
        />
      </Paper>
      <br />
      <Button variant="contained" onClick={handleSubmit}>
        Search
      </Button>
    </div>
  );
};

export default SearchBar;


// import { useEffect, useState } from "react";
// import { Paper, TextField } from "@mui/material";
// import VideoItem from "./VideoItem"; // Import your VideoItem component

// const FirstPage = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [randomVideos, setRandomVideos] = useState([]);

//   // Simulated fetch of random videos (Replace this with API call)
//   useEffect(() => {
//     const fetchRandomVideos = async () => {
//       try {
//         // Replace this section with your actual API call to fetch random videos
//         const response = await fetch("YOUR_API_ENDPOINT");
//         const data = await response.json();

//         // Assuming data is an array of video objects
//         setRandomVideos(data);
//       } catch (error) {
//         console.error("Error fetching random videos:", error);
//       }
//     };

//     // Fetch random videos on component mount
//     fetchRandomVideos();
//   }, []);

//   const handleChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const onKeyPress = (e) => {
//     if (e.key === "Enter") {
//       // Your search logic here
//       console.log("Perform search:", searchTerm);
//     }
//   };

//   return (
//     <div>
//       <h1>Welcome to My Video App!</h1>
//       <Paper elevation={3} style={{ padding: "15px", marginBottom: "20px" }}>
//         <TextField
//           label="Search"
//           variant="outlined"
//           fullWidth
//           value={searchTerm}
//           onChange={handleChange}
//           onKeyPress={onKeyPress}
//           style={{ backgroundColor: "#f5f5f5" }}
//         />
//       </Paper>
//       <div>
//         {/* Mapping over the fetched random videos to display */}
//         {randomVideos.map((video) => (
//           <VideoItem key={video.id} video={video} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FirstPage;
