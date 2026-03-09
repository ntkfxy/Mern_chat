import { useEffect, useRef } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import ChatPage from "../pages/ChatPage";
import MessageInput from "./MessageInput";
import MessageSkeleton from "./skeleton/MessageSkeleton";
import { formatMessageTime } from "../lib/utils.js";
export const ChatContainer = () => {
  const {
    messages,
    users,
    setSelectedUser,
    selectedUser,
    sendMessage,
    getMessage,
  } = useChatStore();
  const { authUser } = useAuthStore();
  const messageRef = useRef(null);

  useEffect(() => {
    getMessage(selectedUser?._id);
  }, [getMessage, selectedUser._id]);

  return <div>ChatContainer</div>;
};
