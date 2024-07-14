import React, { useState, useEffect } from "react";

const Counter = ({ targetCount,message }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 500;
    const interval = 20;
    const steps = duration / interval;
    const increment = targetCount / steps;

    let currentCount = 0;
    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount >= targetCount) {
        setCount(targetCount);
        clearInterval(timer);
      } else {
        setCount(Math.floor(currentCount));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [targetCount]);

  return (
    <div className="border-2 w-40 p-2 text-center rounded-md">
      <p className="text-2xl font-semibold">{count.toLocaleString()} +</p>
      <h2 className="text-md">{message}</h2>
    </div>
  );
};

export default Counter;
