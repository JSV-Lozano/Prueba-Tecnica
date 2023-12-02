import { useAñadirCita } from "../../hooks/useAñadirCita";
type ListaDias = {
  value: string;
  text: string;
};

const listaDias: ListaDias[] = [
  { value: "", text: "Selecciona un dia" },
  { value: "lunes", text: "Lunes" },
  { value: "martes", text: "Martes" },
  { value: "miércoles", text: "Miércoles" },
  { value: "jueves", text: "Jueves" },
  { value: "viernes", text: "Viernes" },
];

function AñadirCita(): JSX.Element {
  const {
    error,
    msgError,
    handleChangeDuration,
    handleChangeDia,
    handleChange,
    createCita,
    succes,
  } = useAñadirCita();

  return (
    <form className="flex flex-col justify-center items-center pt-4 w-[500px] h-[50vh] rounded-lg shadow-shadow-form">
      <h2 className="text-blue-500 text-4xl font-bold pb-3">
        Agenda una cita con nosotros
      </h2>
      <label
        htmlFor="Dias"
        className="block mb-2 text-4xl font-bold text-gray-900 pb-3"
      >
        Selecciona un día
      </label>
      <select
        className="w-[50%] bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
        id="Dias"
        name="Day"
        onChange={handleChangeDia}
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
      <label
        htmlFor="hora"
        className="text-2xl font-semibold"
      >
        Selecciona una hora(entre 9:00 y las 17:00):
      </label>
      <input
        className="text-4xl rounded-2xl border-solid border-2 border-[#000000ab] p-1 mt-2 mb-2"
        type="time"
        id="hora"
        name="Hour"
        min="09:00"
        max="17:00"
        onChange={handleChange}
      />
      <label
        htmlFor="duration"
        className="text-2xl font-semibold"
      >
        Duracion (Entre 30 a 90 minutos):
      </label>
      <input
        className="p-3 text-2xl w-[30%] border-2 rounded-xl mt-2 mb-2"
        id="duration"
        name="Duration"
        type="number"
        min="30"
        max="90"
        onChange={handleChangeDuration}
      />
      <input
        type="submit"
        className="mt-2 text-2xl rounded-2xl bg-[#e1e1e17d] h-[40px] w-[100px] "
        onClick={createCita}
      />
      {error ? (
        <p className="text-2xl md:text-3xl text-red-700">{msgError}</p>
      ) : null}
      {succes ? (
        <p className="text-2xl md:text-3xl text-green-600">Se añadio tu cita</p>
      ) : null}
    </form>
  );
}

export { AñadirCita };
