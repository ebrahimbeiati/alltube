import VideoItem from "./VideoItem";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

const VideoList = ({ videos, onVideoSelect, selectedVideo, isDarkMode = true }) => {
  if (!videos || videos.length === 0) {
    return (
      <div className="text-center py-6 sm:py-8">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
          <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className={`text-lg sm:text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>No Videos Found</h3>
        <p className={`text-sm sm:text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Try searching for something else</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="space-y-3 sm:space-y-4"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-4 sm:mb-6"
      >
        <div className="flex items-center justify-between">
          <h2 className={`text-xl sm:text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Recommended</h2>
          <span className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{videos.length} videos</span>
        </div>
        <div className="w-full h-px bg-gradient-to-r from-purple-500/50 to-pink-500/50 mt-2"></div>
      </motion.div>

      {/* Video Grid */}
      <div className="space-y-3 sm:space-y-4 max-h-[calc(100vh-400px)] sm:max-h-[calc(100vh-300px)] overflow-y-auto custom-scrollbar">
        <AnimatePresence>
          {videos.map((video, index) => (
            <motion.div
              key={video.id.videoId}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ 
                duration: 0.4, 
                delay: 0.5 + index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -4,
                transition: { duration: 0.2 }
              }}
              className={`transition-all duration-300 ${
                selectedVideo?.id.videoId === video.id.videoId 
                  ? 'ring-2 ring-purple-500 rounded-2xl' 
                  : ''
              }`}
            >
              <VideoItem 
                video={video} 
                onSelectVideo={onVideoSelect} 
                isSelected={selectedVideo?.id.videoId === video.id.videoId}
                isDarkMode={isDarkMode}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(168, 85, 247, 0.3);
          border-radius: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(168, 85, 247, 0.5);
        }
      `}</style>
    </motion.div>
  );
};

VideoList.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.shape({
        videoId: PropTypes.string.isRequired,
      }).isRequired,
      snippet: PropTypes.object.isRequired,
    })
  ).isRequired,
  onVideoSelect: PropTypes.func.isRequired,
  selectedVideo: PropTypes.shape({
    id: PropTypes.shape({
      videoId: PropTypes.string.isRequired,
    }),
  }),
  isDarkMode: PropTypes.bool,
};

export default VideoList;
