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
    <form className="flex flex-col justify-center items-center pt-4 w-[100%] h-[50vh] rounded-lg text-center text-white">
      <h2 className="text-[#35f8ff] text-4xl font-bold mb-10">
        Agenda una cita con nosotros
      </h2>
      <label
        htmlFor="Dias"
        className="block mb-7 text-4xl font-bold pb-3 text-white"
      >
        Selecciona un día
      </label>
      <select
        className="w-[90%] bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white mb-10"
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
        className="text-3xl mb-7 font-semibold"
      >
        Selecciona una hora(entre 9:00 y las 17:00):
      </label>
      <input
        className="w-[90%] bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white mb-10"
        type="time"
        id="hora"
        name="Hour"
        min="09:00"
        max="17:00"
        onChange={handleChange}
      />
      <label
        htmlFor="duration"
        className="text-3xl mb-8 font-semibold"
      >
        Duracion (Entre 30 a 90 minutos):
      </label>
      <input
        className="w-[90%] bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 mb-4"
        id="duration"
        name="Duration"
        type="number"
        min="30"
        max="90"
        onChange={handleChangeDuration}
      />
      <input
        type="submit"
        className="mt-2 text-3xl rounded-2xl border border-white h-[40px] w-[100px] text-white cursor-pointer "
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
