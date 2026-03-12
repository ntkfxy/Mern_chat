import React from "react";
import { Send, Check } from "lucide-react";
import { useThemeStore } from "../store/useThemeStore";

const THEMES = [
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

const SettingPage = () => {
    const { theme: selectedTheme, setTheme } = useThemeStore();

    // ดึงชุดสีของธีมปัจจุบัน
    const currentThemeData = THEMES.find((t) => t.name === selectedTheme);
    const primaryColor = currentThemeData?.colors[0]; // สีหลัก (ส้ม, ม่วง, ฯลฯ)
    const bgColor = currentThemeData?.colors[3];      // สีพื้นหลัง

    return (
        <div className="h-screen overflow-y-auto bg-[#0f1218] p-4 md:p-8 text-white">
            <div className="max-w-5xl mx-auto">
                <header className="mb-8">
                    <h1 className="text-2xl font-bold text-white">Settings</h1>
                    <p className="text-slate-400">Customize your chat appearance</p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    
                    {/* ส่วนที่ 1: รายการธีม */}
                    <section>
                        <h2 className="text-lg font-semibold mb-4 text-slate-300">Select Theme</h2>
                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                            {THEMES.map((t) => (
                                <button
                                    key={t.name}
                                    onClick={() => setTheme(t.name)}
                                    className={`group flex flex-col gap-1.5 p-2.5 rounded-2xl border-2 transition-all ${
                                        selectedTheme === t.name 
                                        ? "border-[#ff7e5f] bg-orange-50 dark:bg-orange-500/5" 
                                        : "border-transparent hover:bg-slate-800"
                                    }`}
                                >
                                    <div className="relative h-10 w-full rounded-lg overflow-hidden flex shadow-sm">
                                        {t.colors.map((color, i) => (
                                            <div key={i} className="flex-1" style={{ backgroundColor: color }} />
                                        ))}
                                        {selectedTheme === t.name && (
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                                                <Check size={16} className="text-white drop-shadow-md" />
                                            </div>
                                        )}
                                    </div>
                                    <span className={`text-[11px] font-medium capitalize truncate ${
                                        selectedTheme === t.name ? "text-[#ff7e5f]" : "text-slate-500"
                                    }`}>
                                        {t.name}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </section>

                    {/* ส่วนที่ 2: Preview Chat */}
                    <section className="sticky top-0">
                        <h2 className="text-lg font-semibold mb-4 text-slate-700 dark:text-slate-300">Live Preview</h2>
                        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-[#151a22] overflow-hidden shadow-2xl">
                            {/* Header Preview */}
                            <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-white font-bold" style={{ backgroundColor: primaryColor }}>
                                    J
                                </div>
                                <div>
                                    <p className="text-sm font-bold dark:text-white">John Doe</p>
                                    <p className="text-[10px] text-emerald-500 font-medium">Online</p>
                                </div>
                            </div>

                            {/* Chat Content Preview */}
                            <div className="p-5 space-y-4 bg-[#0f1218] min-h-[300px]">
                                {/* ฝั่งคนอื่น */}
                                <div className="flex gap-2">
                                    <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800" />
                                    <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[80%]">
                                        <p className="text-xs text-slate-600 dark:text-slate-300">Hey! How does the new theme look?</p>
                                    </div>
                                </div>
                                {/* ฝั่งเรา */}
                                <div className="flex justify-end">
                                    <div 
                                        className="p-3 rounded-2xl rounded-tr-none shadow-md max-w-[80%] text-white transition-all duration-300 hover:scale-105 duration-500"
                                        style={{ backgroundColor: primaryColor }}
                                    >
                                        <p className="text-xs">It looks amazing! The colors match perfectly.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Input Preview */}
                            <div className="p-4 bg-[#151a22] border-t border-slate-100 dark:border-slate-800 flex gap-2">
                                <div className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-xl px-4 py-2 text-xs text-slate-400">
                                    Type a message...
                                </div>
                                <div 
                                    className="w-9 h-9 rounded-xl flex items-center justify-center text-white"
                                    style={{ backgroundColor: primaryColor }}
                                >
                                    <Send size={16} />
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default SettingPage;