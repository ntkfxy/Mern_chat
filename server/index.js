const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const { server, app } = require("./lib/socket");

// นำเข้า Router 
const UserRouter = require("./routers/user.router");
const MessageRouter = require("./routers/message.router");

dotenv.config();

// ประกาศตัวแปรจาก .env ให้ครบ
const DB_URL = process.env.DB_URL;
const CLIENT_URL = process.env.CLIENT_URL;
const PORT = process.env.PORT || 5000;

// 1. Middleware: จัดการเรื่องขนาดไฟล์และ JSON
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());

// 2. Middleware: CORS
app.use(
  cors({
    origin: CLIENT_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "x-access-token"],
  })
);

// 3. เส้นทางทดสอบ (Root Route)
app.get("/", (req, res) => {
  res.send("<h1>Welcome to MERN CHAT SERVER</h1>");
});

// 4. ประกาศใช้งาน Router (ต้องอยู่หลัง Middleware ด้านบน)
app.use("/api/v1/user", UserRouter);
app.use("/api/v1/message", MessageRouter);

// 5. การเชื่อมต่อฐานข้อมูล
if (!DB_URL) {
  console.error("DB_URL is missing. Please set it in your .env file.");
} else {
  mongoose
    .connect(DB_URL)
    .then(() => {
      console.log("Connected to MongoDB successfully");
    })
    .catch((error) => {
      console.error("MongoDB connection error:", error.message);
    });
}

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});