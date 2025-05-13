// server/index.js

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const newsRoutes = require("./routes/news");
const authRoutes = require("./routes/auth");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/news", newsRoutes);
app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
