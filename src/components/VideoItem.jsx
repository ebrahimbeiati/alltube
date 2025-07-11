import { motion } from "framer-motion";
import PropTypes from "prop-types";

const VideoItem = ({ video, onSelectVideo, isSelected, isDarkMode = true }) => {
  const { title, channelTitle, thumbnails, publishedAt } = video.snippet;

  // Format published date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return "1 day ago";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
    return `${Math.floor(diffDays / 365)} years ago`;
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`cursor-pointer group ${isSelected ? `backdrop-blur-xl rounded-2xl p-2 sm:p-3 border ${
        isDarkMode ? 'bg-white/10 border-purple-500/30' : 'bg-gray-100/50 border-purple-500/30'
      }` : ''}`}
      onClick={() => onSelectVideo(video)}
    >
      <div className="flex space-x-3 sm:space-x-4">
        {/* Thumbnail */}
        <div className="relative flex-shrink-0">
          <img
            src={thumbnails.medium?.url || thumbnails.default?.url}
            alt={title}
            className="w-32 h-20 sm:w-48 sm:h-32 object-cover rounded-2xl shadow-lg"
          />
          <div className="absolute bottom-1 sm:bottom-2 right-1 sm:right-2 bg-black/80 text-white text-xs px-1 sm:px-2 py-0.5 sm:py-1 rounded-lg backdrop-blur-sm">
            10:30
          </div>
          {isSelected && (
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center">
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          )}
        </div>

        {/* Video Info */}
        <div className="flex-1 min-w-0">
          <h3 className={`text-sm sm:text-lg font-semibold line-clamp-2 group-hover:text-purple-300 transition-colors leading-tight ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {title}
          </h3>
          <p className={`mt-1 sm:mt-2 hover:text-purple-300 transition-colors font-medium text-xs sm:text-base ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {channelTitle}
          </p>
          <div className={`flex items-center space-x-2 mt-1 sm:mt-2 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            <span className="text-xs sm:text-sm">123K views</span>
            <span className="text-sm sm:text-lg">•</span>
            <span className="text-xs sm:text-sm">{formatDate(publishedAt)}</span>
          </div>
        </div>

        {/* More Options Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`opacity-0 group-hover:opacity-100 transition-opacity w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center ${
            isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={(e) => {
            e.stopPropagation();
            // Handle more options
          }}
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
};

VideoItem.propTypes = {
  video: PropTypes.shape({
    snippet: PropTypes.shape({
      title: PropTypes.string.isRequired,
      channelTitle: PropTypes.string.isRequired,
      thumbnails: PropTypes.shape({
        medium: PropTypes.shape({
          url: PropTypes.string,
        }),
        default: PropTypes.shape({
          url: PropTypes.string,
        }),
      }).isRequired,
      publishedAt: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  onSelectVideo: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
  isDarkMode: PropTypes.bool,
};

export default VideoItem;
