const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const morgan = require("morgan");

require("dotenv").config();

connectDB();

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/health", (req, res) => {
  res.send("Server is running");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
