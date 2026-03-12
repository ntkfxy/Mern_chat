import { create } from "zustand";
import { persist } from "zustand/middleware";

export const THEMES = [
  { name: "light", colors: ["#570df8", "#f000b8", "#37cdbe", "#3d4451"] },
  { name: "dark", colors: ["#661ae6", "#d926a9", "#1fb2a6", "#2a323c"] },
  { name: "cupcake", colors: ["#65c3c8", "#ef9fbc", "#eeaf3a", "#291334"] },
  { name: "bumblebee", colors: ["#e0a82e", "#f9d72f", "#181830", "#ffffff"] },
  { name: "emerald", colors: ["#66cc8a", "#377cfb", "#ea5234", "#333c4d"] },
  { name: "corporate", colors: ["#4b6bfb", "#7b92b2", "#67cba0", "#181a2f"] },
  { name: "synthwave", colors: ["#e779c1", "#58c7f3", "#f3cc30", "#20134e"] },
  { name: "retro", colors: ["#ef9995", "#a4cbb4", "#ebdc99", "#7d7259"] },
  { name: "cyberpunk", colors: ["#ff7598", "#75d1f0", "#c07eec", "#423f00"] },
  { name: "valentine", colors: ["#e96d7b", "#a991f7", "#88e7b1", "#af4670"] },
  { name: "halloween", colors: ["#f28c18", "#6d3a9c", "#51a800", "#1b1d1d"] },
  { name: "garden", colors: ["#5c7f67", "#ecf4e7", "#fae5e5", "#5d5656"] },
  { name: "forest", colors: ["#1eb854", "#1fd65f", "#d99330", "#110e0e"] },
  { name: "aqua", colors: ["#09ecf3", "#966fb3", "#ffe999", "#3b8ea5"] },
  { name: "lofi", colors: ["#808080", "#4d4d4d", "#1a1a1a", "#f2f2f2"] },
  { name: "pastel", colors: ["#d1c1d7", "#f6cbd1", "#b4e9d6", "#70acc7"] },
  { name: "fantasy", colors: ["#6e0b75", "#007ebd", "#f8860d", "#1f2937"] },
  { name: "wireframe", colors: ["#b8b8b8", "#b8b8b8", "#b8b8b8", "#b8b8b8"] },
  { name: "black", colors: ["#333333", "#333333", "#333333", "#000000"] },
  { name: "luxury", colors: ["#ffffff", "#152747", "#513448", "#171618"] },
  { name: "dracula", colors: ["#ff79c6", "#bd93f9", "#ffb86c", "#414558"] },
  { name: "cmyk", colors: ["#45aec0", "#e549ed", "#e3d237", "#1f2937"] },
  { name: "autumn", colors: ["#8c0327", "#d85251", "#d59b6a", "#826a5c"] },
  { name: "business", colors: ["#1c4f82", "#7d919b", "#d3e6d5", "#212121"] },
  { name: "acid", colors: ["#ff00ff", "#ff5e00", "#ccff00", "#191e24"] },
  { name: "lemonade", colors: ["#519903", "#e9e92f", "#cdf26b", "#191e24"] },
  { name: "night", colors: ["#38bdf8", "#818cf8", "#f472b6", "#1e293b"] },
  { name: "coffee", colors: ["#db924b", "#263e3f", "#10576d", "#120c12"] },
  { name: "winter", colors: ["#047aff", "#463aa1", "#c149ad", "#021431"] },
  { name: "dim", colors: ["#9ecaed", "#c8b6ff", "#ffb3c6", "#2a303c"] },
  { name: "nord", colors: ["#5e81ac", "#81a1c1", "#88c0d0", "#2e3440"] },
  { name: "sunset", colors: ["#ff865b", "#fd6f9c", "#b387fa", "#121c22"] },
];

export const useThemeStore = create(
  persist(
    (set) => ({
      theme: "light",
      setTheme: (theme) => set({ theme }), // เมื่อเรียก setTheme ค่าใน App.jsx จะเปลี่ยนตามทันที
    }),
    {
      name: "ui-theme",
    }
  )
);