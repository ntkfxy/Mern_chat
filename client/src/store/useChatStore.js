import { create } from "zustand";
import api from "../service/api.js"
import { useAuthStore } from "./useAuthStore.js";
import toast from "react-hot-toast";

//crate รับ from เป็น callback function รับ paramitor ไป 2 ตัวคือ getter , setter
export const useChatStore = create((set, get) => ({
  //object นี้มีอะไรบ้างนึกถึง class diagram
  //เขียน artibute ก่อน
  users: [],
  messages: [],
  selectedUser: null,
  isUserLoading: false,
  isMessageLoading: false,

  getUsers: async () => {
    set({ isUserLoading: true });
    try {
      const response = await api.get("/message/users");
      set({
        users: response.data,
      });
    } catch (error) {
      toast.error(error.response.data.message || "getUser Failed");
    } finally {
      set({ isUserLoading: false });
    }
  },

  sendMessage: async (messageData) => {
    const { selectedUser, messages } = get();
    try {
      const response = await api.post(
        "/message/send/" + selectedUser._id,
        messageData,
      );
      //state ของเราเป็น array เพราะงั้นตอนรับมาใหม่ก็ต้องรับเป็น array
      set({
        messages: [...messages, response.data],
      });
    } catch (error) {
      toast.error(error.response.data.message || "Sending Message Failed");
    }
  },

  getMessage: async (userId) => {
    set({ isMessageLoading: true });
    try {
      const response = await api.get(`/message/${userId}`);
      set({
        messages: response.data,
      });
    } catch (error) {
      toast.error(error.response.data.message || "getting Message Failed");
    } finally {
      set({ isMessageLoading: false });
    }
  },

  setSelectedUser: (selectedUser) => {
    set({
      selectedUser
    });
  },
}));