import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postsRoutes from "./routes/posts.js";

// const userRoutes = require("./routes/user")

const app = express();

app.use(express.json());
app.use("/api/posts", postsRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

app.listen(8800, () => {
  console.log("connected!");
});
