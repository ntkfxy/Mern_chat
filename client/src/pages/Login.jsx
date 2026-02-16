import React, { useState } from "react";
import { MessageSquare, Settings, Eye, EyeOff } from "lucide-react";

export default function Login() {
  // State สำหรับสลับการแสดงรหัสผ่าน
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#0f1218] flex relative overflow-hidden font-sans selection:bg-[#ff7e5f] selection:text-white">
      {/* ========================================= */}
      {/* ส่วนที่ 2: ส่วนซ้าย (แบบฟอร์ม Login)       */}
      {/* ========================================= */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 sm:px-12 relative z-10">
        <div className="w-full max-w-[400px]">
          {/* Logo ตรงกลางฟอร์ม (ไอคอนเล็กๆ เหนือ Welcome Back) */}
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-slate-800/50 rounded-2xl border border-slate-700/50 shadow-xl shadow-black/20">
              <MessageSquare className="text-[#ff7e5f]" size={32} />
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-white mb-3">Welcome Back</h1>
            <p className="text-slate-500">Sign in to your account</p>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            {/* Input Email */}
            <div className="form-control w-full">
              <label className="label pb-1">
                <span className="label-text font-bold text-slate-400">
                  Email
                </span>
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="input input-bordered w-full bg-slate-800/50 border-slate-700 focus:border-[#ff7e5f] focus:outline-none focus:ring-1 focus:ring-[#ff7e5f] text-slate-200 placeholder:text-slate-600 pl-4 h-12 transition-all duration-200"
              />
            </div>

            {/* Input Password */}
            <div className="form-control w-full">
              <label className="label pb-1">
                <span className="label-text font-bold text-slate-400">
                  Password
                </span>
              </label>
              <div className="relative group">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="input input-bordered w-full bg-slate-800/50 border-slate-700 focus:border-[#ff7e5f] focus:outline-none focus:ring-1 focus:ring-[#ff7e5f] text-slate-200 placeholder:text-slate-600 pl-4 h-12 transition-all duration-200"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-slate-500 hover:text-white transition-colors"
                >
                  {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button className="btn btn-block bg-[#ff7e5f] hover:bg-[#ff6b4a] border-none text-white text-base font-medium mt-4 h-12 normal-case shadow-lg shadow-[#ff7e5f]/20 transition-all hover:scale-[1.01]">
              Sign in
            </button>
          </form>

          {/* Footer Link */}
          <p className="text-center text-slate-500 mt-8 text-sm">
            Don't have an account?{" "}
            <a
              href="#"
              className="text-[#ff7e5f] hover:text-[#ff9d85] hover:underline font-medium transition-colors"
            >
              Create account
            </a>
          </p>
        </div>
      </div>

      {/* ========================================= */}
      {/* ส่วนที่ 3: ส่วนขวา (Hero Grid Section)     */}
      {/* ========================================= */}
      <div className="hidden lg:flex w-1/2 bg-[#13161c] relative flex-col justify-center items-center p-12">
        {/* Grid ตกแต่ง */}
        <div className="grid grid-cols-3 gap-5 mb-16 opacity-100">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="w-28 h-28 bg-[#1a1d24] rounded-2xl hover:bg-[#20232b] hover:scale-105 transition-all duration-500 cursor-default border border-white/5 shadow-2xl"
            ></div>
          ))}
        </div>

        {/* ข้อความด้านล่างตาราง */}
        <div className="text-center relative z-10 max-w-md">
          <h2 className="text-2xl font-bold text-white mb-3">Welcome back!</h2>
          <p className="text-slate-500 leading-relaxed">
            Sign in to continue your conversations and catch up with your
            messages.
          </p>
        </div>
      </div>
    </div>
  );
}
