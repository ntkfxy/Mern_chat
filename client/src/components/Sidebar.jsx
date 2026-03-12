import React, { useEffect, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import { Users } from "lucide-react";

const Sidebar = () => {
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);

  const {
    getUsers,
    setSelectedUser,
    isUserLoading,
    selectedUser,
    users,
  } = useChatStore();

  const { onlineUsers } = useAuthStore();

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const filteredUsers = showOnlineOnly
    ? users.filter((user) => onlineUsers.includes(user._id))
    : users;

  if (isUserLoading) {
    return (
      <div className="flex-1 flex items-center justify-center text-slate-400 bg-[#151a22]">
        <div className="w-6 h-6 border-2 border-[#ff7e5f] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div
      className="
      fixed md:relative
      left-0 top-0
      h-full
      w-[85%] sm:w-[300px] md:w-[280px] lg:w-[320px]
      bg-[#151a22]
      border-r border-slate-800
      flex flex-col
      z-40
      transition-all duration-300
      "
    >
      {/* Header */}
      <div className="p-4 md:p-5 border-b border-slate-800">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 text-slate-200 font-bold text-base md:text-lg">
            <div className="p-1.5 bg-orange-500/10 rounded-lg">
              <Users size={20} className="text-[#ff7e5f]" />
            </div>
            <h2>Contacts</h2>
          </div>

          <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full font-medium">
            {onlineUsers.length - 1} Online
          </span>
        </div>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={showOnlineOnly}
            onChange={() => setShowOnlineOnly(!showOnlineOnly)}
            className="w-4 h-4 rounded border-slate-700 text-[#ff7e5f] focus:ring-[#ff7e5f]"
          />
          <span className="text-sm text-slate-400">
            Show online only
          </span>
        </label>
      </div>

      {/* User List */}
      <div className="flex-1 overflow-y-auto py-2 px-2 md:px-3">
        {filteredUsers?.length === 0 ? (
          <div className="text-center py-10 text-slate-500 text-sm">
            No contacts found
          </div>
        ) : (
          filteredUsers.map((user) => (
            <button
              key={user._id}
              onClick={() => setSelectedUser(user)}
              className={`w-full flex items-center gap-3 p-3 mb-1 rounded-xl md:rounded-2xl transition-all duration-200 group ${
                selectedUser?._id === user._id
                  ? "bg-[#ff7e5f]/10"
                  : "hover:bg-[#1e2632]"
              }`}
            >
              {/* Avatar */}
              <div className="relative">
                <div
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center font-bold text-base overflow-hidden ${
                    selectedUser?._id === user._id
                      ? "bg-[#ff7e5f] text-white"
                      : "bg-[#1e2632] text-slate-300"
                  }`}
                >
                  {user.profilePic ? (
                    <img
                      src={user.profilePic}
                      alt={user.fullName}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    user.fullName?.charAt(0).toUpperCase()
                  )}
                </div>

                {onlineUsers.includes(user._id) && (
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-[#151a22] rounded-full"></div>
                )}
              </div>

              {/* Info */}
              <div className="text-left flex-1 min-w-0">
                <div
                  className={`font-semibold text-sm truncate ${
                    selectedUser?._id === user._id
                      ? "text-[#ff7e5f]"
                      : "text-slate-200"
                  }`}
                >
                  {user.fullName}
                </div>

                <div className="text-xs">
                  {onlineUsers.includes(user._id) ? (
                    <span className="text-emerald-400 font-medium">
                      Online
                    </span>
                  ) : (
                    <span className="text-slate-500">Offline</span>
                  )}
                </div>
              </div>
            </button>
          ))
        )}
      </div>
    </div>
  );
};

export default Sidebar;