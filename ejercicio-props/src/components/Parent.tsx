import { Child } from "./Child";

interface Props {
  name: string;
  age: number;
}

export const Parent = ({ name, age }: Props) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md text-center">
      <h2 className="text-lg font-semibold text-blue-700 mb-2">Componente Padre</h2>
      <p className="text-gray-700 mb-4">
        Nombre: <span className="font-medium">{name}</span> | Edad: <span className="font-medium">{age}</span>
      </p>
      <Child name={name} age={age} />
    </div>
  );
};
