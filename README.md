# CommentIQ
# YouTube Comment Summarizer 🎥 ✨

A modern web application that leverages Google's Gemini AI to automatically summarize YouTube video comments into concise, meaningful insights. Built with Flask, Google's APIs, and a sleek, responsive frontend.


![image](https://github.com/user-attachments/assets/f67f0413-a54e-454b-90e7-238b86f35315) 


## 🌟 Features

- **Smart Comment Analysis**: Fetches and analyzes up to 100 recent comments from any YouTube video
- **AI-Powered Summaries**: Uses Google's Gemini AI to generate concise, meaningful summaries
- **Multiple Input Formats**: Supports full YouTube URLs, shortened URLs, or direct video IDs
- **Modern UI/UX**: Clean, responsive interface with loading states and error handling
- **Real-time Validation**: Instant input validation for YouTube URLs and video IDs

## 🚀 Getting Started

### Prerequisites

- Python 3.8 or higher
- YouTube Data API key
- Google Gemini API key
- pip (Python package manager)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/youtube-comment-summarizer.git
cd youtube-comment-summarizer
```

2. Create and activate a virtual environment (recommended):
```bash
python -m venv venv
# On Windows
.\venv\Scripts\activate
# On macOS/Linux
source venv/bin/activate
```

3. Install required packages:
```bash
pip install -r requirements.txt
```

4. Create a `.env` file in the root directory:
```plaintext
YOUTUBE_API_KEY=your_youtube_api_key_here
GEMINI_API_KEY=your_gemini_api_key_here
```

5. Run the application:
```bash
python app.py
```

6. Open your browser and navigate to `http://127.0.0.1:5000`

## 🔑 API Keys Setup

### YouTube Data API
1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the YouTube Data API v3
4. Create credentials (API key)
5. Copy the API key to your `.env` file

### Google Gemini API
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Copy the API key to your `.env` file

## 📁 Project Structure

```
youtube-comment-summarizer/
├── app.py                 # Main Flask application
├── static/
│   ├── css/
│   │   └── styles.css    # Custom CSS styles
│   └── js/
│       └── main.js       # Frontend JavaScript
├── templates/
│   └── index.html        # Main HTML template
├── requirements.txt      # Python dependencies
├── .env                 # Environment variables
└── README.md            # Project documentation
```

## 🛠️ Technologies Used

- **Backend**
  - Flask (Python web framework)
  - Google YouTube Data API v3
  - Google Generative AI (Gemini)
  - python-dotenv

- **Frontend**
  - HTML5
  - Tailwind CSS
  - JavaScript (ES6+)
  - Inter font family

## 🌐 API Endpoints

- `GET /`: Serves the main application page
- `POST /summarize`: Accepts a video ID and returns a summary
  - Request body: `{ "videoId": "string" }`
  - Response: `{ "summary": "string" }` or `{ "error": "string" }`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## ⚙️ Configuration Options

You can modify the following settings in `app.py`:
- Maximum number of comments to fetch (default: 100)
- Summary bullet points count (modifiable in the Gemini prompt)
- Various timeout and retry settings for API calls

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎯 Future Improvements

- [ ] Add support for comment sentiment analysis
- [ ] Implement user authentication
- [ ] Add history of previously summarized videos
- [ ] Support for multiple language summaries
- [ ] Export summaries in different formats
- [ ] Add more detailed analytics of comments

## 🐛 Known Issues

- YouTube videos with comments disabled will return an error
- Very long comments might be truncated in the summary
- Rate limiting may apply based on API quotas


## 🙏 Acknowledgments

- Google for providing the YouTube Data API and Gemini AI
- The Flask team for the excellent web framework
- All contributors who have helped improve this project

---
Made with ❤️ by Arjun Raina
