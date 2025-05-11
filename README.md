## Voice Journal Backend API 🗄️🎙️

Powering the Voice Journal app with secure user authentication, speech-to-text processing, and intelligent entry organization. This RESTful API handles voice data conversion, entry storage, and search functionality for the Voice Journal frontend. Refer to our frontend to know more about the project:

🔗 Frontend Repository: [https://github.com/ssubhashini2004/smart-journal-frontend]

🚀 Deployment: Hosted on Render

## Features

Core Functionality

User Authentication: JWT-based signup/login with password encryption.

Speech-to-Text Processing: Integrates with deepgram API to convert audio to text.

Entry Management: CRUD operations for journal entries with auto-timestamping.

Search & Filter: Full-text search across entries and filtering by date/tags.

Audio File Handling: Secure storage/retrieval of transcription of voice recordings.

## Advanced Capabilities

Auto-Tagging: NLP-based keyword extraction to categorize entries (e.g., "work", "ideas").


## 🚀 Tech Stack

- **Node.js** – JavaScript runtime environment
- **Express.js** – Web framework for building RESTful APIs
- **MongoDB Atlas** – Cloud-hosted NoSQL database
- **Mongoose** – ODM for MongoDB object modeling
- **CORS** – Cross-origin request support
- **Dotenv** – Environment variable management

**Framework**: Node.js + Express

**Database**: MongoDB via MongoDB Atlas

**Speech-to-Text:** Using deepgram API [https://deepgram.com/]

**Auth:** JSON Web Tokens (JWT) + bcrypt

## Installation

Clone the repo:

bash
git clone https://github.com/ssubhashini2004/server.git

cd server


## Contributing

Follow the frontend contribution guidelines.

Write tests for new features using Jest.

Document API changes in API_DOCS.md.

Feel free to reach out for any doubts or clarifications!
