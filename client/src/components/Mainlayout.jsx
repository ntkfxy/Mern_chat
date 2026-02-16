import React from "react";
import { Outlet } from "react-router";
import NavBar from "./Navbar";

const MainLayout = () => {
  return (
    // เปลี่ยน bg-skysoft เป็น bg-[#0f1218] และเพิ่ม text-slate-200 ให้ตัวหนังสือเป็นสีขาว
    <div className="min-h-screen flex flex-col bg-[#0f1218] text-slate-200">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0f1218]/80 backdrop-blur-md border-b border-white/5">
        <NavBar />
      </header>

      {/* Main Content */}
      <main className="grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
