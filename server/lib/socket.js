require("dotenv").config();
const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: [process.env.CLIENT_URL],
  },
});

// 1. แก้ไขเป็น Object {} เพื่อเก็บคู่ของ userId กับ socketId
const userSocketMap = {}; 

function getRecipientSocketId(userId) {
  return userSocketMap[userId];
}

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);
  
  // รับ userId จาก Frontend
  const userId = socket.handshake.query.userId;
  
  if (userId && userId !== "undefined") {
    // 2. บันทึก socket.id ลงใน Object โดยมี userId เป็น Key
    // (เอาคำว่า const userSocketMap = {}; ออกไป แล้วใส่ค่าตรงๆ เลย)
    userSocketMap[userId] = socket.id;
    console.log("UserSocketMap Update:", userSocketMap);
  }
  
  // แจ้งทุกคนในระบบว่ามีใครออนไลน์อยู่บ้าง
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    console.log("A user disconnected", socket.id);
    
    // ลบ userId ของคนที่ปิดหน้าเว็บออก
    delete userSocketMap[userId];
    console.log("UserSocketMap After Disconnect:", userSocketMap);
    
    // 3. แจ้งเตือนทุกคนอีกรอบว่าคนนี้ Offline ไปแล้ว!
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

module.exports = { io, app, server, getRecipientSocketId };