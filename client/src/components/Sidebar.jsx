import React from "react";
import { useEffect, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import { Users, X } from "lucide-react";

const Sidebar = ({}) => {
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);
  const { getUsers, setSelectedUser, isUserLoading, selectedUser, users } =
    useChatStore();
  const { onlineUsers } = useAuthStore();

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const filteredUsers = showOnlineOnly
    ? users.filter((user) => onlineUsers.includes(user._id))
    : users;

  if (isUserLoading) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="flex w-full h-full">
      {/* =========================================
          ส่วนซ้าย: Sidebar
      ========================================= */}
      <div
        className={`${
          filteredUsers ? "hidden md:flex" : "flex"
        } flex-col w-full md:w-72 lg:w-80 border-r border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50`}
      >
        {/* Header */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 font-semibold mb-4">
            <Users size={18} />
            <h2>Contacts</h2>
          </div>

          <label className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 cursor-pointer w-max">
            <input
              type="checkbox"
              checked={showOnlineOnly}
              onChange={() => setShowOnlineOnly(!showOnlineOnly)}
              className="rounded border-slate-300 dark:border-slate-700"
            />
            Show online only
          </label>
        </div>

        {/* รายชื่อ */}
        <div className="flex-1 overflow-y-auto p-2">
          {filteredUsers?.map((user) => (
            <button
              key={user._id}
              onClick={() => setSelectedUser(user)}
              className={`w-full flex items-center gap-3 p-3 rounded-xl transition-colors ${
                selectedUser?._id === user._id
                  ? "bg-slate-200 dark:bg-slate-800"
                  : "hover:bg-slate-100 dark:hover:bg-slate-800/50"
              }`}
            >
              <div className="relative">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${user.profilePic} ${user.fullName}`}
                >
                  {user.name.charAt(0)}
                </div>

                {onlineUsers.includes(user._id) && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></div>
                )}
              </div>

              <div className="text-left flex-1">
                <div className="font-medium text-sm text-slate-800 dark:text-slate-200">
                  {user.name}
                </div>
                <div className="text-xs text-slate-500">{user.status}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* =========================================
          Main Chat Area
      ========================================= */}
      <div
        className={`${
          !selectedUser ? "hidden md:flex" : "flex"
        } flex-1 flex-col bg-white dark:bg-transparent`}
      >
        {selectedUser ? (
          <>
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${selectedUser.avatarBg} ${selectedUser.color}`}
                >
                  {selectedUser.name.charAt(0)}
                </div>

                <div>
                  <h3 className="font-semibold text-sm text-slate-800 dark:text-slate-200">
                    {selectedUser.name}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {onlineUsers.includes(selectedUser._id)
                      ? "Online"
                      : "Offline"}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedUser(null)}
                className="p-2 hover:bg-slate-100 rounded-full"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4"></div>

            {/* Footer */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-800">
              {!selectedUser.isFriend && (
                <div className="flex items-center justify-center gap-2 text-sm">
                  <span className="text-red-500">
                    You must be friends with this user to send messages.
                  </span>
                  <button className="bg-slate-800 hover:bg-slate-700 text-white px-3 py-1.5 rounded-lg text-xs">
                    Add Friend
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-full text-slate-400">
            Select a chat
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
