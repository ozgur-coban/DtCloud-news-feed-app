const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const newsRoutes = require("./routes/newsFeed");
const authRoutes = require("./routes/auth");

const app = express();
const PORT = process.env.PORT || 5000;
const allowedOrigins = [
  "http://localhost:3000",
  "https://dt-cloud-news-feed-app.vercel.app",
];
app.use(
  cors({
    origin: allowedOrigins,
  })
);
app.use(express.json());

app.use("/newsFeed", newsRoutes);
app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
