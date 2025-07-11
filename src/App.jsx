
import { useState, useEffect, useCallback } from "react";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import SearchBar from "./components/SearchBar";
import youtube from "./api/youtube";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showTrendingModal, setShowTrendingModal] = useState(false);
  const [trendingVideos, setTrendingVideos] = useState([]);

  const fetchRandomVideos = useCallback(async () => {
    setIsLoading(true);
    try {
      const {
        data: { items },
      } = await youtube.get("/search", {
        params: {
          part: "snippet",
          maxResults: 15,
          key: import.meta.env.VITE_REACT_APP_API_KEY,
          q: getRandomQuery(),
        },
      });

      setVideos(items);
      setSelectedVideo(items[0]);
    } catch (error) {
      console.error("Error fetching videos:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const fetchTrendingVideos = useCallback(async () => {
    try {
      const {
        data: { items },
      } = await youtube.get("/videos", {
        params: {
          part: "snippet",
          maxResults: 10,
          key: import.meta.env.VITE_REACT_APP_API_KEY,
          chart: "mostPopular",
          regionCode: "US",
        },
      });

      setTrendingVideos(items);
    } catch (error) {
      console.error("Error fetching trending videos:", error);
    }
  }, []);

  useEffect(() => {
    fetchRandomVideos();
  }, [fetchRandomVideos]);

  const handleTrendingClick = () => {
    setShowTrendingModal(true);
    fetchTrendingVideos();
  };

  const handleTrendingVideoSelect = (video) => {
    setSelectedVideo(video);
    setShowTrendingModal(false);
    // Add the trending video to the current video list
    setVideos(prev => [video, ...prev.filter(v => v.id.videoId !== video.id.videoId)]);
  };

  function getRandomQuery() {
    const queries = [
      "trending",
      "music",
      "gaming",
      "technology",
      "cooking",
      "travel",
      "movies",
      "sports",
      "education",
      "comedy",
    ];
    return queries[Math.floor(Math.random() * queries.length)];
  }

  async function handleSubmit(searchItem) {
    setIsLoading(true);
    try {
      const {
        data: { items },
      } = await youtube.get("/search", {
        params: {
          part: "snippet",
          maxResults: 15,
          key: import.meta.env.VITE_REACT_APP_API_KEY,
          q: searchItem,
        },
      });

      setVideos(items);
      setSelectedVideo(items[0]);
    } catch (error) {
      console.error("Error searching videos:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white' 
        : 'bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 text-gray-900'
    }`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-black/20 border-white/10' 
          : 'bg-white/80 border-gray-200'
      }`}>
        <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-4 space-y-4 sm:space-y-0">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-sm sm:text-lg">A</span>
            </div>
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              AllTube
            </span>
          </motion.div>

          {/* Search Bar */}
          <div className="w-full sm:flex-1 sm:max-w-2xl sm:mx-8">
            <SearchBar onSubmit={handleSubmit} isDarkMode={isDarkMode} />
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-colors ${
                isDarkMode 
                  ? 'bg-white/10 hover:bg-white/20' 
                  : 'bg-gray-200/50 hover:bg-gray-300/50'
              }`}
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleTrendingClick}
              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-colors ${
                isDarkMode 
                  ? 'bg-white/10 hover:bg-white/20' 
                  : 'bg-gray-200/50 hover:bg-gray-300/50'
              }`}
              title="Trending Videos"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
            </motion.button>
          </div>
        </div>
      </header>

      {/* Trending Videos Modal */}
      <AnimatePresence>
        {showTrendingModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setShowTrendingModal(false)}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`relative w-full max-w-2xl max-h-[80vh] overflow-hidden rounded-3xl shadow-2xl ${
                isDarkMode ? 'bg-slate-800' : 'bg-white'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className={`flex items-center justify-between p-6 border-b ${
                isDarkMode ? 'border-white/10' : 'border-gray-200'
              }`}>
                <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  🔥 Trending Now
                </h2>
                <button
                  onClick={() => setShowTrendingModal(false)}
                  className={`p-2 rounded-xl transition-colors ${
                    isDarkMode ? 'hover:bg-white/10' : 'hover:bg-gray-100'
                  }`}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto max-h-[60vh]">
                {trendingVideos.length > 0 ? (
                  <div className="space-y-4">
                    {trendingVideos.map((video, index) => (
                      <motion.div
                        key={video.id.videoId}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => handleTrendingVideoSelect(video)}
                        className={`flex items-center space-x-4 p-4 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 ${
                          isDarkMode ? 'bg-white/5 hover:bg-white/10' : 'bg-gray-50 hover:bg-gray-100'
                        }`}
                      >
                        <div className="relative flex-shrink-0">
                          <img
                            src={video.snippet.thumbnails.medium?.url || video.snippet.thumbnails.default?.url}
                            alt={video.snippet.title}
                            className="w-20 h-12 object-cover rounded-xl"
                          />
                          <div className="absolute top-1 left-1 bg-red-500 text-white text-xs px-1 rounded">
                            #{index + 1}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className={`font-semibold line-clamp-2 ${
                            isDarkMode ? 'text-white' : 'text-gray-900'
                          }`}>
                            {video.snippet.title}
                          </h3>
                          <p className={`text-sm mt-1 ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            {video.snippet.channelTitle}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                      Loading trending videos...
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="p-4 sm:p-6 lg:p-8">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center items-center h-64"
            >
              <div className="text-center">
                <motion.div
                  className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-purple-500 border-t-transparent rounded-full mx-auto mb-4 sm:mb-6"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <p className="text-purple-400 text-base sm:text-lg font-semibold">Loading amazing content...</p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              {selectedVideo ? (
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                  <div className="lg:col-span-3">
                    <VideoDetail video={selectedVideo} isDarkMode={isDarkMode} />
                  </div>
                  <div className="lg:col-span-1">
                    <VideoList 
                      videos={videos} 
                      onVideoSelect={setSelectedVideo} 
                      selectedVideo={selectedVideo}
                      isDarkMode={isDarkMode}
                    />
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 sm:py-12">
                  <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <svg className="w-8 h-8 sm:w-12 sm:h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-2">Welcome to AllTube</h2>
                  <p className="text-gray-400 text-sm sm:text-base">Select a video to start your journey</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
