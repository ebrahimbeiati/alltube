
import React from "react";
import { Paper, TextField, Typography, Button, InputBase, InputAdornment } from "@mui/material";

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
    <div className="textAlign: center, fontWeight: bold, paddingTop: 50px" >
      <Typography variant="h3" gutterBottom className=" fontWeight: bold">
        Welcome to My Video App
      </Typography>
      <Paper elevation={4} >
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
          InputLabelProps={{ classNAme:"fontSize: 16px" } }
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
