import { useCounter } from "../hooks/useCounter";

export default function LikeButton({ 
  label = "Like 👍", 
  color = "green", 
  message = "¡Apoya nuestros productos naturales!", 
  initialCount = 0 
}) {
  const { count, increase } = useCounter(initialCount);

  return (
    <div className="flex flex-col items-center mt-6">
      <button
        onClick={increase}
        className={`bg-${color}-600 hover:bg-${color}-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-all duration-200 active:scale-95`}
      >
        {label} {count}
      </button>
      <p className="text-xl text-gray-300 mt-2">{message}</p>
    </div>
  );
}
