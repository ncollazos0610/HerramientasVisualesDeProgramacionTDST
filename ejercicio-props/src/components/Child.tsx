import Grandchild from "../components/GrandChild"

// 🔹 Interfaz del componente Child
interface ChildProps {
  message: string;
  setMessage: (newMessage: string) => void;
}

const Child = ({ message, setMessage }: ChildProps) => {
  return (
    <div className="p-4 border rounded-lg bg-white mt-3">
      <h3 className="text-lg font-semibold text-green-700">Componente Child</h3>
      {/* Pasamos nuevamente los props hacia el nieto */}
      <Grandchild message={message} setMessage={setMessage} />
    </div>
  );
};

export default Child;
