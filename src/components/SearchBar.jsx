import { useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const SearchBar = ({ onSubmit, isDarkMode = true }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e) => setSearchTerm(e.target.value);

  const handleSubmit = () => {
    if (searchTerm.trim()) onSubmit(searchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative"
    >
      <div className={`flex items-center backdrop-blur-xl rounded-2xl border overflow-hidden ${
        isDarkMode 
          ? 'bg-white/10 border-white/20' 
          : 'bg-white/80 border-gray-200'
      }`}>
        {/* Search Input */}
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search for videos..."
            value={searchTerm}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`w-full px-4 sm:px-6 py-3 sm:py-4 bg-transparent focus:outline-none text-base sm:text-lg ${
              isDarkMode 
                ? 'text-white placeholder-gray-300' 
                : 'text-gray-900 placeholder-gray-500'
            }`}
          />
          {searchTerm && (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              onClick={() => setSearchTerm("")}
              className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.button>
          )}
        </div>

        {/* Search Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleSubmit}
          disabled={!searchTerm}
          className="px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed transition-all duration-300 flex items-center space-x-2"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
          <span className="text-white font-medium text-sm sm:text-base">Search</span>
        </motion.button>
      </div>

      {/* Focus Glow Effect */}
      {isFocused && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl -z-10"
        />
      )}
    </motion.div>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool,
};

export default SearchBar;
