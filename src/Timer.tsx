import React, { useState, useEffect } from "react";

interface TimerProps {
  duration: number; // in seconds
  onTimeUp: () => void;
}

const Timer: React.FC<TimerProps> = ({ duration, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer); // Clear the timer when the component unmounts
  }, [timeLeft, onTimeUp]);

  return (
    <div className="text-xl font-semibold text-center mb-4">
      Time Left: {timeLeft}s
    </div>
  );
};

export default Timer;
