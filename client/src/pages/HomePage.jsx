import React from "react";
import { Users, MessageSquare } from "lucide-react";
import Sidebar from "../components/Sidebar";
const HomePage = () => {
  return (
    // กำหนดความสูงเป็น h-[calc(100vh-64px)] สมมติว่า Navbar มีความสูงประมาณ 64px
    // เพื่อให้ตัวแอปพอดีกับหน้าจอพอดี (ไม่เกิด Scroll bar หน้าเว็บ)
    <div className="flex h-[calc(100vh-64px)] bg-transparent text-slate-300 overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col items-center justify-center bg-transparent">
        <div className="flex flex-col items-center text-center max-w-md px-4 fade-in">
          {/* กรอบไอคอนตรงกลาง */}
          <div className="w-16 h-16 bg-slate-800/40 rounded-2xl flex items-center justify-center mb-6 border border-slate-700/50 shadow-sm">
            <MessageSquare className="text-[#ff7e5f]" size={32} />
          </div>

          {/* ข้อความต้อนรับ */}
          <h2 className="text-2xl font-bold text-white mb-3">
            Welcome to SE Chat!
          </h2>
          <p className="text-slate-400 text-sm">
            Select a conversation from the sidebar to start chatting
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
