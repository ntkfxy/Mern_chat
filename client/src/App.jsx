import React, { useEffect } from "react";
import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/useAuthStore";
import { useThemeStore } from "./store/useThemeStore"; // 1. Import มาให้เรียบร้อย
import { Loader } from "lucide-react";

function App() {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();
  const { theme } = useThemeStore(); // 2. เรียกใช้ข้างใน Component

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  // 3. ใส่ data-theme ไว้ที่ div นอกสุดเพื่อให้ครอบคลุมทั้ง Navbar, Outlet และ Footer
  // และยังช่วยให้สีพื้นหลังเปลี่ยนตามธีมด้วย min-h-screen
  return (
    <div data-theme={theme} className="min-h-screen flex flex-col transition-colors duration-300">
      {isCheckingAuth && !authUser ? (
        <div className="flex items-center justify-center flex-1">
          <Loader className="size-10 animate-spin text-primary" />
        </div>
      ) : (
        <>
          <Navbar />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
        </>
      )}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default App;