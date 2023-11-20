
import React, { useState } from "react";
import {
  Paper,
  TextField,
  Typography,
  Button,
  InputAdornment,
} from "@mui/material";

const SearchBar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

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
    <div
      className="textAlign: center, 
     padding: 20px"
    >
      <Typography
        variant="h3"
        gutterBottom
        className=" fontWeight: bold
      text-center"
      >
        Welcome to My Video App
      </Typography>
      <Paper elevation={4}>
        <TextField
          placeholder="Search"
          fullWidth
          value={searchTerm}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {/* Add an icon here if needed */}
              </InputAdornment>
            ),
          }}
          InputLabelProps={{ className: "fontSize-16px" }} // Corrected class name syntax
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

