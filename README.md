# DtCloud News Feed App

🧭 **User Guide – DtCloud News Feed App**  
Welcome to the DtCloud News Feed App — a customizable news feed platform where you can filter articles by category, register/login securely, and view curated headlines from multiple sources.

## 🚀 Quick Links
- **Live App (Frontend):** [https://dt-cloud-news-feed-app.vercel.app](https://dt-cloud-news-feed-app.vercel.app)  
- **Live Server (Backend):** [https://dtcloud-news-feed-app.onrender.com](https://dtcloud-news-feed-app.onrender.com)  
- **GitHub Repo:** [https://github.com/ozgur-coban/DtCloud-news-feed-app](https://github.com/ozgur-coban/DtCloud-news-feed-app)

## 🛠️ Local Setup Instructions

### 1. Prerequisites
Make sure you have the following installed:  
- **Node.js** (v12+)  
- **npm** or **yarn**

### 2. Clone the Project
```bash
git clone https://github.com/ozgur-coban/DtCloud-news-feed-app
cd DtCloud-news-feed-app
```

### 3. Install Dependencies
**Frontend**
```bash
cd frontend
npm install
```

**Backend**
```bash
cd ../server
npm install
```

### 4. Create Environment File (REQUIRED)
You must create a `.env` file inside the `server/` folder before running the backend.

```bash
cd server
touch .env
```

Then open `.env` and add:
```
NEWS_API_KEY=your-news-api-key
JWT_SECRET=your-jwt-secret
PORT=5000
```

⚠️ **Without this step, the backend server will not start properly.**

### 5. Start the App Locally
**Start Backend (API Server)**
```bash
cd server
node index.js
```
Server will run at: [http://localhost:5000](http://localhost:5000)

**Start Frontend (React)**
```bash
cd frontend
npm start
```
Frontend will run at: [http://localhost:3000](http://localhost:3000)

✅ Open [http://localhost:3000](http://localhost:3000) to view the app.

## 🧪 Using the App

### Register
- Click **Register here**  
- Enter a username and password  
- You will be logged in and redirected  

### Login
- Use your registered credentials  
- On successful login, a JWT token is saved locally  

### Filter News
- Select categories like **Technology**, **Health**, or **Sports**  
- The news feed updates based on your preferences  

### View Articles
Each article card shows:  
✅ **Title**  
📝 **Description**  
🖼️ **Image** (if available)  
🔗 **Link to full article**  

### Logout
- Click **Logout** to securely end your session  

## 📁 File Structure (Simplified)
```
DtCloud-news-feed-app/
├── server/              # Backend (Node.js, Express)
│   ├── .env             # Required env vars (must create!)
│   ├── index.js         # Entry point
│   ├── controllers/     # Route logic
│   └── routes/          # API routes
├── frontend/            # Frontend (React)
│   ├── src/
│   │   ├── components/  # UI components (Login, Register, NewsFeed)
│   │   ├── styles/      # CSS
│   │   └── App.js       # Main app
```

## ✅ Notes
- The app works both locally and online.  
- For local testing, the app falls back to [http://localhost:5000](http://localhost:5000) if no `REACT_APP_BACKEND_URL` is provided.  
- Example `.env` variables are only required for backend in `server/.env`.