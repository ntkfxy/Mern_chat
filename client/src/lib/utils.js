
export const formatMessageTime = (date) => {
  const messageDate = new Date(date);
  const now = new Date();

  const isToday =
    messageDate.getDate() === now.getDate() &&
    messageDate.getMonth() === now.getMonth() &&
    messageDate.getFullYear() === now.getFullYear();

  const isYesterday =
    messageDate.getDate() === now.getDate() - 1 &&
    messageDate.getMonth() === now.getMonth() &&
    messageDate.getFullYear() === now.getFullYear();

  if (isToday) {
    return messageDate.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  if (isYesterday) {
    return "Yesterday";
  }

  return messageDate.toLocaleDateString([], {
    month: "short",
    day: "numeric",
  });
};
