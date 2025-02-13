import React, { useState } from "react";
import { Paper, TextField, Button, InputAdornment, Typography } from "@mui/material";
import { Search, Clear } from "@mui/icons-material"; // Clear icon for clearing search
import { motion } from "framer-motion"; // Framer Motion for animation

const SearchBar = ({ onSubmit, onClear }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => setSearchTerm(e.target.value);

  const handleSubmit = () => {
    if (searchTerm) onSubmit(searchTerm);
  };

  const handleClear = () => {
    setSearchTerm("");
    onClear();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ width: "100%", textAlign: "center", paddingBottom: "20px" }}
    >
      <Typography variant="h3" sx={{ fontWeight: 700, color: "white", marginBottom: 3 }}>
        Movie Search
      </Typography>
      <Paper
        elevation={5}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "25px",
          padding: "10px",
          maxWidth: 600,
          margin: "0 auto",
          backgroundColor: "#121212",
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search Movies..."
          value={searchTerm}
          onChange={handleChange}
          sx={{
            backgroundColor: "white",
            borderRadius: "20px",
            "& .MuiInputBase-root": { borderRadius: "20px" },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color: "#757575" }} />
              </InputAdornment>
            ),
          }}
        />
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              marginLeft: 2,
              padding: "10px 20px",
              borderRadius: "15px",
              backgroundColor: "#ff4081",
              "&:hover": {
                backgroundColor: "#ff80ab",
              },
            }}
          >
            Search
          </Button>
        </motion.div>

        {searchTerm && (
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleClear}
              sx={{
                marginLeft: 2,
                padding: "10px 20px",
                borderRadius: "15px",
                backgroundColor: "#757575",
                "&:hover": {
                  backgroundColor: "#9e9e9e",
                },
              }}
            >
              <Clear />
            </Button>
          </motion.div>
        )}
      </Paper>
    </motion.div>
  );
};

export default SearchBar;
