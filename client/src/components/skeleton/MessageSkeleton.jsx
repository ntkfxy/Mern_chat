import React from "react";

const MessageSkeleton = () => {
  const skeletonMessages = [
    { id: 1, isMe: false },
    { id: 2, isMe: true },
    { id: 3, isMe: false },
    { id: 4, isMe: false },
    { id: 5, isMe: true },
    { id: 6, isMe: false },
  ];

  return (
    <>
      {skeletonMessages.map((msg) => (
        <div
          key={msg.id}
          className={`flex ${msg.isMe ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`flex w-full max-w-[75%] md:max-w-[60%] ${
              msg.isMe ? "flex-row-reverse" : "flex-row"
            } gap-2 md:gap-3`}
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-300 dark:bg-slate-800 animate-pulse"></div>

            <div
              className={`flex flex-col gap-2 w-full ${
                msg.isMe ? "items-end" : "items-start"
              }`}
            >
              <div
                className={`h-10 rounded-2xl animate-pulse ${
                  msg.isMe
                    ? "bg-[#ff7e5f]/40 rounded-tr-none w-32 sm:w-48" // สีส้มจางๆ (ฝั่งเรา)
                    : "bg-slate-300 dark:bg-slate-800 rounded-tl-none w-40 sm:w-64" // สีเทา (ฝั่งเพื่อน)
                }`}
              ></div>
              
              <div className="h-3 w-12 bg-slate-200 dark:bg-slate-800 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MessageSkeleton;