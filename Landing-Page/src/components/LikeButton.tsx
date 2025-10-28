import { useCounter } from "../hooks/useCounter";

export default function LikeButton() {
  const { count, increase } = useCounter(0);

  return (
    <div className="flex flex-col items-center mt-6">
      <button
        onClick={increase}
        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-all duration-200 active:scale-95"
      >
        👍 Like ({count})
      </button>
      <p className="text-sm text-gray-300 mt-2">¡Apoya nuestros productos naturales!</p>
    </div>
  );
}
