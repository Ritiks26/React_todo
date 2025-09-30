import { useEffect, useState } from "react";

export function Countdown({ dueDate }) {
  const [timeLeft, setTimeLeft] = useState("00M: 00S");
  useEffect(() => {
    const formatTime = (num) => String(num ?? 0).padStart(2, "0");
    const getTimeLeft = () => {
      if (!dueDate || isNaN(new Date(dueDate).getTime())) {
        return "00M: 00S";
      }

      const now = new Date();
      const diff = new Date(dueDate) - now;

      if (diff <= 0) return "EXPIRED";

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      if (days > 0) {
        return `${days}D: ${formatTime(hours)}H: ${formatTime(minutes)}M`;
      } else if (hours > 0) {
        return `${formatTime(hours)}H: ${formatTime(minutes)}M: ${formatTime(
          seconds
        )}S`;
      } else if (minutes > 0) {
        return `${formatTime(minutes)}M: ${formatTime(seconds)}S`;
      } else {
        return `${formatTime(seconds)}S`;
      }
    };

    const update = () => setTimeLeft(getTimeLeft());
    update();

    const timer = setInterval(update, 1000);

    return () => clearInterval(timer);
  }, [dueDate]);

  return <span>{timeLeft}</span>;
}
