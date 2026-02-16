const jwt = require("jsonwebtoken");
const UserModel = require("../models/User");

require("dotenv").config();

// Middleware สำหรับตรวจสอบ JWT token และดึงข้อมูล userจาก token มาเก็บไว้ใน req.user
const protectedRoute = async (req, res, next) => {
  // ดึง token จาก cookie
  try {
    // ดึง token จาก cookie
    const token = req.cookies.token;
    // ถ้าไม่มี token ให้ส่ง response 401 Unauthorized  หรือ redirect ไปหน้า login/register
    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized - No token Provider" });
    }
    // ถ้ามี token ให้ verify token ด้วย secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // ถ้า token ไม่ถูกต้องหรือหมดอายุ ให้ส่ง response 401 Unauthorized
    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized - Invalid token" });
    }
    // ถ้า token ถูกต้อง ให้ดึงข้อมูล user จาก database โดยใช้ userId ที่ได้จาก token
    const user = await UserModel.findById(decoded.id).select("-password");
    //ถ้าไม่เจอ user ต้องขึ้นแจ้งเตือนว่าหา user ไม่เจอ
    //เหมือนขนส่งว่า สามารถส่งในบริบทอื่นได้ไหม ต้องมาเช็คเงื่อนไขสถานะในการขนส่งมีอะไร
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error while checking " });
  }
};

const authMiddleware = {
  protectedRoute,
};
module.exports = authMiddleware;
