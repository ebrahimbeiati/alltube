
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const VideoDetail = ({ video, isDarkMode = true }) => {
  if (!video || !video.id) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <svg className="w-8 h-8 sm:w-12 sm:h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className={`text-xl sm:text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Select a Video</h2>
          <p className={`text-sm sm:text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Choose from the recommendations to start watching</p>
        </div>
      </div>
    );
  }

  const { title, channelTitle, description, publishedAt } = video.snippet;
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      {/* Video Player */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative bg-black rounded-3xl overflow-hidden shadow-2xl"
      >
        <iframe
          src={videoSrc}
          className="w-full aspect-video"
          title="Video Player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </motion.div>

      {/* Video Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-6"
      >
        {/* Title */}
        <h1 className={`text-xl sm:text-2xl lg:text-3xl font-bold leading-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          {title}
        </h1>

        {/* Video Stats and Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <div className={`flex items-center space-x-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <span className="text-base sm:text-lg">1.2M views</span>
            <span className="text-xl sm:text-2xl">•</span>
            <span className="text-base sm:text-lg">{formatDate(publishedAt)}</span>
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center space-x-2 px-3 sm:px-6 py-2 sm:py-3 backdrop-blur-xl rounded-2xl transition-colors border ${
                isDarkMode 
                  ? 'bg-white/10 hover:bg-white/20 border-white/20' 
                  : 'bg-gray-100/50 hover:bg-gray-200/50 border-gray-200'
              }`}
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
              </svg>
              <span className="font-medium text-sm sm:text-base">123K</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center space-x-2 px-3 sm:px-6 py-2 sm:py-3 backdrop-blur-xl rounded-2xl transition-colors border ${
                isDarkMode 
                  ? 'bg-white/10 hover:bg-white/20 border-white/20' 
                  : 'bg-gray-100/50 hover:bg-gray-200/50 border-gray-200'
              }`}
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
              </svg>
              <span className="font-medium text-sm sm:text-base">DISLIKE</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center space-x-2 px-3 sm:px-6 py-2 sm:py-3 backdrop-blur-xl rounded-2xl transition-colors border ${
                isDarkMode 
                  ? 'bg-white/10 hover:bg-white/20 border-white/20' 
                  : 'bg-gray-100/50 hover:bg-gray-200/50 border-gray-200'
              }`}
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
              <span className="font-medium text-sm sm:text-base">SHARE</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-10 h-10 sm:w-12 sm:h-12 backdrop-blur-xl rounded-2xl flex items-center justify-center transition-colors border ${
                isDarkMode 
                  ? 'bg-white/10 hover:bg-white/20 border-white/20' 
                  : 'bg-gray-100/50 hover:bg-gray-200/50 border-gray-200'
              }`}
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Channel Info */}
        <div className={`flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 sm:p-6 backdrop-blur-xl rounded-3xl border space-y-4 sm:space-y-0 ${
          isDarkMode 
            ? 'bg-white/5 border-white/10' 
            : 'bg-white/50 border-gray-200'
        }`}>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-lg sm:text-xl">{channelTitle.charAt(0)}</span>
            </div>
            <div>
              <h3 className={`text-lg sm:text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{channelTitle}</h3>
              <p className={`text-sm sm:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>1.2M subscribers</p>
            </div>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-2xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 text-sm sm:text-base"
          >
            SUBSCRIBE
          </motion.button>
        </div>

        {/* Description */}
        <div className={`p-4 sm:p-6 backdrop-blur-xl rounded-3xl border ${
          isDarkMode 
            ? 'bg-white/5 border-white/10' 
            : 'bg-white/50 border-gray-200'
        }`}>
          <div className="space-y-4">
            <div className={`flex items-center space-x-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <span className="text-base sm:text-lg">123K views</span>
              <span className="text-xl sm:text-2xl">•</span>
              <span className="text-base sm:text-lg">{formatDate(publishedAt)}</span>
            </div>
            <p className={`leading-relaxed text-base sm:text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {description.length > 300 
                ? `${description.substring(0, 300)}...` 
                : description
              }
            </p>
            {description.length > 300 && (
              <button className="text-purple-400 hover:text-purple-300 font-semibold text-base sm:text-lg">
                SHOW MORE
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

VideoDetail.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.shape({
      videoId: PropTypes.string.isRequired,
    }),
    snippet: PropTypes.shape({
      title: PropTypes.string.isRequired,
      channelTitle: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      publishedAt: PropTypes.string.isRequired,
    }).isRequired,
  }),
  isDarkMode: PropTypes.bool,
};

export default VideoDetail;
