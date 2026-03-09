import React, { useState } from "react";
import { Users, Image as ImageIcon, Send } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";
const CONTACTS = [
  {
    id: 1,
    fullName: "Thomas",
    status: "Online",
    profilePic: "",
    isFriend: true,
  },
];

const ChatPage = () => {
  const [activeChat, setActiveChat] = useState(CONTACTS[0]);
  const { selectedUser, setSelectedUser } = useChatStore;
  const {onlineUser} = useAuthStore;

  return (
    <div className="flex h-[calc(100vh-64px)] w-full max-w-7xl mx-auto bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-300">
      <Sidebar />
      {activeChat ? (
        <div className="flex flex-col flex-1 justify-end p-4">
          {/* ช่องกรอกข้อความ */}
          <div className="flex items-center gap-2">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Type a message..."
                disabled={!activeChat.isFriend}
                className="w-full bg-slate-100 dark:bg-slate-900 border border-transparent dark:border-slate-800 rounded-xl py-3 pl-4 pr-10 text-sm text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-slate-400 disabled:opacity-50 disabled:cursor-not-allowed"
              />

              <button
                disabled={!activeChat.isFriend}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 disabled:opacity-50"
              >
                <img
                  src={selectedUser.profilePic}
                  alt={selectedUser.fullName}
                />
              </button>
            </div>

            <button
              disabled={!activeChat.isFriend}
              className="p-3 bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-xl hover:bg-slate-300 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      ) : (
        /* หน้า Welcome */
        <div className="flex-1 flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 p-4 text-center">
          <div className="w-16 h-16 bg-slate-100 dark:bg-slate-900 rounded-2xl flex items-center justify-center mb-4 border border-slate-200 dark:border-slate-800">
            <Users size={32} className="text-[#ff7e5f]" />
          </div>

          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">
            Welcome to SE Chat!
          </h2>

          <p className="text-sm">
            Select a conversation from the sidebar to start chatting
          </p>
        </div>
      )}
    </div>
  );
};

export default ChatPage;
