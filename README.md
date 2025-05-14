# Customizable News Feed Web App

A simple and customizable news feed web app built with React (frontend) and Node.js (backend), providing category-based filtering of news articles from multiple sources.

## Features

- **Category-based Filtering**: Users can filter news by selecting one or more categories (e.g., Technology, Sports, Business).
- **Image Previews**: Articles display image previews if available.
- **Secure Authentication**: The app supports secure login and registration functionality using JWT tokens.
- **Responsive Layout**: The layout adapts to different screen sizes and device types.
- **News API Integration**: The app fetches news articles from external APIs based on selected categories.

## Tech Stack

- **Frontend**: React, CSS, Axios
- **Backend**: Node.js, Express
- **Authentication**: JWT-based authentication

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v12 or higher)
- npm or yarn

### Clone the Repository

```bash
git clone https://github.com/ozgur-coban/DtCloud-news-feed-app
cd DtCloud-news-feed-app
```

### Install Dependencies

Install both the frontend and backend dependencies:

**For Frontend (React)**

```bash
cd frontend
npm install
```

**For Backend (Node.js)**

```bash
cd server
npm install
```

### Running the App Locally

**Start the Backend Server**

```bash
cd server
node index.js
```

This will start the backend server on `http://localhost:5000`.

**Start the Frontend Development Server**

```bash
cd frontend
npm start
```

This will start the frontend development server on `http://localhost:3000`.

Once both servers are running, the app will be available at `http://localhost:3000` in your browser.

### Environment Variables

If you need to configure your app (for example, API keys for fetching news), create a `.env` file in the backend and add necessary variables,Closer to home, like this:

```ini
NEWS_API_KEY=your-news-api-key
JWT_SECRET=your-jwt-secret
PORT=5000
```

### Register and Login

- **To register**: Use the "Register" page to create a new user by entering a username and password.
- **To login**: After registering, use the "Login" page to enter your credentials and receive a JWT token. The token will be stored in the local storage for authentication.

### Selecting Categories

Once logged in, you can select categories of interest from the Category Selector to filter news articles accordingly. Categories can be customized by the user, and news will be fetched from the server based on those selections.

### Viewing News Articles

The articles fetched from the API will be displayed in a list, with the following details:

- Article title
- Article description
- Image preview (if available)
- A link to read the full article

### Logout

When you're done, click the "Logout" button to log out of your account. The JWT token will be cleared from local storage.

## File Structure

```
your-repo-name/
├── backend/              # Backend code (Node.js)
│   ├── controllers/      # API route handlers
│   ├── routes/           # API routes
│   ├── index.js         # Entry point for the backend
│   └── .env              # Environment variables (e.g., API keys)
├── frontend/             # Frontend code (React)
│   ├── src/
│   │   ├── components/   # React components (NewsFeed, Login, Register)
│   │   ├── App.js        # Main React component
│   │   ├── index.js      # Entry point for the frontend
│   │   └── styles/       # CSS for styling
│   ├── package.json      # Frontend dependencies
├── .gitignore            # Git ignore file
├── README.md             # This file
└── package.json          # Root package.json (for managing dependencies)
```
