import { useState } from "react";

export const useCounter = (initial = 0) => {
  const [count, setCount] = useState(initial);

  const increase = () => setCount((prev) => prev + 1);
  const decrease = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));
  const reset = () => setCount(initial);

  return { count, increase, decrease, reset };
};
