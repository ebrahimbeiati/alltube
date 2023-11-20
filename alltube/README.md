# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:
# npm run dev

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
Video Search App
This is a Video Search App built using Vite, Tailwind CSS, the YouTube API, and Material-UI. This app allows users to search for and watch YouTube videos.

App Screenshot

Features
Search: Enter keywords to search for videos on YouTube.
Watch: View the videos directly within the app.
Responsive: Designed to work seamlessly on various screen sizes.
Technologies Used
Vite: A fast and efficient frontend tooling for web development.
Tailwind CSS: A utility-first CSS framework used for styling.
Material-UI: React components for building user interfaces.
YouTube API: Allows fetching and displaying YouTube videos.
Setup
Clone the repository:

bash
Copy code
git clone https://github.com/your_username/video-search-app.git
Install Dependencies:

bash
Copy code
cd video-search-app
npm install
Set Up the YouTube API:

Obtain a YouTube Data API key from the Google Developers Console.

Add the API key to the .env file:

env
Copy code
REACT_APP_YOUTUBE_API_KEY=your_api_key_here
Run the App:

bash
Copy code
npm run dev
Access the App:

Open your browser and go to http://localhost:3000 to view the app.

Usage
Enter a search query in the search bar and press "Enter" or click the search button.
The app will display a list of videos related to the search query.
Click on a video to watch it within the app.
Contributions
Contributions are welcome! Feel free to open issues or submit pull requests.

