import Parent from "./components/Parent";
import './App.css'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Ejercicio 1: Prop Drilling con Props Tipadas
      </h1>
      <Parent />
    </div>
  );
}
