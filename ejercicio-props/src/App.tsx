import { Parent } from "./components/Parent";
import "./App.css";

export default function App() {
  return (
    //codigo tailwind para contenedor blanco donde alamcenare la informacion del ejercicio
    //Debo tenerlo en cuenta para otros proyectos!!!!
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-blue-50 to-white p-6">
      <section className="bg-white shadow-lg rounded-2xl p-8 max-w-md text-center border border-blue-100">
        <h1 className="text-3xl font-bold text-blue-700 mb-3">
          Ejercicio HV
        </h1>
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Prop Drilling con Props Tipadas
        </h2>
        <Parent name="Nicolás" age={29} />
      </section>
    {/* footer para "marca de agua" para hacer mi codigo propio */}
      <footer className="mt-6  text-gray-500">
        Desarrollado por Nicolás Collazos
      </footer>
    </main>
  );
}
