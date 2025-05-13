const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const users = []; // In-memory user store

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";

// Register user
const registerUser = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ error: "Username and password required" });

  const existing = users.find((u) => u.username === username);
  if (existing) return res.status(409).json({ error: "User already exists" });

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });

  res.status(201).json({ message: "User registered successfully" });
};

// Login user
const loginUser = async (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);

  if (!user) return res.status(401).json({ error: "Invalid credentials" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ error: "Invalid credentials" });

  const token = jwt.sign({ username: user.username }, JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({ token });
};

module.exports = { registerUser, loginUser };
