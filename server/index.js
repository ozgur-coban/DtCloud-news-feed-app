const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const newsRoutes = require("./routes/newsFeed");
const authRoutes = require("./routes/auth");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/newsFeed", newsRoutes);
app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
