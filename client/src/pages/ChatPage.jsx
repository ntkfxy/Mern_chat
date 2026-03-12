import React from "react";
import { Users } from "lucide-react";
import MessageInput from "../components/MessageInput";
import ChatContainer from "../components/ChatContainer";
import { useChatStore } from "../store/useChatStore";
import Sidebar from "../components/Sidebar";
import { THEMES, useThemeStore } from "../store/useThemeStore";

const ChatPage = () => {
  const { selectedUser } = useChatStore();
  const { theme } = useThemeStore();

const currentTheme = THEMES.find((t) => t.name === theme);

const primaryColor = currentTheme?.colors[0];
const bgColor = currentTheme?.colors[3];

  return (
    <div className="h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="flex h-full w-full max-w-[1600px] mx-auto overflow-hidden shadow-2xl">
        
        {/* Sidebar: บนมือถือจะซ่อนถ้าเลือก User, บน Desktop จะโชว์ปกติ */}
        <div className={`${selectedUser ? "hidden md:flex" : "flex"} w-full md:w-80 lg:w-96 flex-shrink-0 border-r border-slate-200 dark:border-slate-800`}>
          <Sidebar />
        </div>

        {/* Main Chat Area */}
        <div className={`${!selectedUser ? "hidden md:flex" : "flex"} flex-1 flex-col bg-[#151a22] relative`}>
          
          {selectedUser ? (
            <>
              {/* ส่วนแสดงข้อความ */}
              <ChatContainer />
              
              {/* ส่วนพิมพ์ข้อความ - ยึดติดขอบล่าง */}
              <div className="p-4 bg-[#151a22] border-t dark:border-slate-800">
                <MessageInput />
              </div>
            </>
          ) : (
            /* No Chat Selected State (หน้า Welcome) */
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-500">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-orange-50 dark:bg-orange-500/10 rounded-3xl flex items-center justify-center border border-orange-100 dark:border-orange-500/20">
                  <Users size={40} className="text-[#ff7e5f]" />
                </div>
                {/* ตกแต่งด้วยวงกลมสีส้มฟุ้งๆ ด้านหลัง */}
                <div className="absolute inset-0 bg-[#ff7e5f] blur-3xl opacity-10 -z-10"></div>
              </div>
              
              <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                Welcome to <span className="text-[#ff7e5f]">SE Chat</span>
              </h2>
              <p className="text-slate-500 dark:text-slate-400 max-w-sm">
                Select a friend from the sidebar to start a conversation and share your moments.
              </p>
              
              <div className="mt-8 flex gap-2">
                <div className="w-2 h-2 rounded-full bg-[#ff7e5f] animate-bounce"></div>
                <div className="w-2 h-2 rounded-full bg-[#ff7e5f] animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-2 h-2 rounded-full bg-[#ff7e5f] animate-bounce [animation-delay:-0.3s]"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatPage;