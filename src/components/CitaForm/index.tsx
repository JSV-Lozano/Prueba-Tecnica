import { useState } from "react";
import { useEspacios } from "../../hooks/useEspacios";

type ListaDias = {
  value: string;
  text: string;
};

const listaDias: ListaDias[] = [
  { value: "lunes", text: "Lunes" },
  { value: "martes", text: "Martes" },
  { value: "miércoles", text: "Miércoles" },
  { value: "jueves", text: "Jueves" },
  { value: "viernes", text: "Viernes" },
];

function Citaform(): JSX.Element {
  const [dia, setDia] = useState<string>("lunes");
  const calculateAvailableSpaces = useEspacios();
  const obtenerEspacios = () => {
    calculateAvailableSpaces(dia);
  };
  return (
    <section className="flex flex-col justify-center items-center w-full pt-4">
      <label
        htmlFor="Dias"
        className="block mb-2 text-4xl font-bold text-white"
      >
        Selecciona un día
      </label>
      <select
        className="w-[50%] bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        id="Dias"
        value={dia}
        onChange={(e) => setDia(e.target.value)}
      >
        {listaDias.map((dia) => (
          <option
            key={dia.value}
            value={dia.value}
          >
            {dia.text}
          </option>
        ))}
      </select>

      <button
        className="mt-2 text-3xl text-white rounded-2xl bg-[#e1e1e17d] h-[40px] w-[100px] "
        onClick={obtenerEspacios}
      >
        Consultar
      </button>
    </section>
  );
}

export { Citaform };
