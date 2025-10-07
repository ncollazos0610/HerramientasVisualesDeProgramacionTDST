import { useState } from "react";
import Child from "../components/Child"

interface ParentProps {}

const Parent = ({}: ParentProps) => {
  const [message, setMessage] = useState("Hola desde Parent 👋");

  return (
    <div className="p-4 border rounded-lg bg-gray-100 text-center">
      <h2 className="text-xl font-bold mb-2 text-blue-700">Componente Parent</h2>
      <p className="mb-4 text-gray-700">Mensaje actual: {message}</p>
      {/* Pasamos datos y función como props tipadas */}
      <Child message={message} setMessage={setMessage} />
    </div>
  );
};

export default Parent;
