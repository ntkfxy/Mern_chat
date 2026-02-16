import React from "react";
import { Settings, MessageSquare } from "lucide-react";

const Navbar = () => {
  return (
    // ใช้ bg-transparent เพื่อให้สีพื้นหลังของ MainLayout แสดงผล
    <div className="navbar bg-transparent px-4 sm:px-6 lg:px-8">
      {/* ส่วนซ้าย: Logo SE Chat */}
      <div className="flex-1">
        <a className="btn btn-ghost hover:bg-transparent normal-case text-xl gap-3 px-0">
          {/* ไอคอนสีส้ม */}
          <div className="p-2 bg-slate-800/50 rounded-lg border border-slate-700/50">
            <MessageSquare className="text-[#ff7e5f]" size={24} />
          </div>
          {/* ข้อความสีขาว */}
          <span className="font-bold text-white">SE Chat</span>
        </a>
      </div>

      {/* ส่วนขวา: ปุ่ม Settings */}
      <div className="flex-none">
        <button className="btn btn-ghost text-slate-400 hover:text-white hover:bg-slate-800 gap-2">
          <Settings size={20} />
          <span className="hidden sm:inline font-normal">Settings</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
