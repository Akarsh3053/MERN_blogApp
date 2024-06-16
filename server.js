const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// environment setup
dotenv.config();

//Router
const userRoutes = require('./routes/userRoutes');
const blogRoutes = require('./routes/blogRoutes');

//DB setup
connectDB();

const PORT = process.env.PORT;

const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/blog", blogRoutes);

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
  );
});
