from flask import Flask, request, jsonify, render_template
from googleapiclient.discovery import build
import google.generativeai as genai
from dotenv import load_dotenv
import os

load_dotenv()  # Load environment variables from .env file

app = Flask(__name__)

# Use environment variables for API keys
YOUTUBE_API_KEY = os.getenv("YOUTUBE_API_KEY")
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

# Initialize the YouTube API client
youtube = build('youtube', 'v3', developerKey=YOUTUBE_API_KEY)

# Initialize the Gemini API
genai.configure(api_key=GEMINI_API_KEY)
model = genai.GenerativeModel('gemini-pro')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/summarize', methods=['POST'])
def summarize():
    video_id = request.json['videoId']
    
    try:
        # Fetch comments from YouTube
        comments = fetch_youtube_comments(video_id)
        
        # Combine comments
        combined_comments = "\n\n".join(comments)
        
        # Summarize with Gemini
        summary = summarize_with_gemini(combined_comments)
        
        return jsonify({'summary': summary})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

def fetch_youtube_comments(video_id):
    comments = []
    next_page_token = None
    
    while len(comments) < 100:
        request = youtube.commentThreads().list(
            part="snippet",
            videoId=video_id,
            maxResults=100,
            pageToken=next_page_token
        )
        response = request.execute()
        
        for item in response['items']:
            comment = item['snippet']['topLevelComment']['snippet']['textDisplay']
            comments.append(comment)
        
        next_page_token = response.get('nextPageToken')
        if not next_page_token:
            break
    
    return comments[:100]  # Limit to 100 comments

def summarize_with_gemini(text):
    prompt = f"Summarize the main themes from these YouTube comments in three bullet points:\n\n{text}"
    response = model.generate_content(prompt)
    return response.text

if __name__ == '__main__':
    app.run(debug=True)