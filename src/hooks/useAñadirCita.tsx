import { ChangeEvent, useContext, useState } from "react";
import { GlobalState } from "../Context";
import { useEspacios } from "./useEspacios";

type AñadirCIta = {
  Day: string;
  Hour: string;
  Duration: string;
};

function useAñadirCita() {
  const { citas, setCitas, espacios } = useContext(GlobalState);
  const calculateAvailableSpaces = useEspacios();
  const [añadirCita, setAñadirCita] = useState<AñadirCIta>({
    Day: "",
    Hour: "",
    Duration: "",
  });
  const [error, setError] = useState<boolean>(false);
  const [msgError, setMsgError] = useState<string>("");
  const [succes, setSucces] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputTime = event.target.value;
    const minTime = event.target.min;
    const maxTime = event.target.max;
    const { Day } = añadirCita;
    console.log(minTime);
    console.log(maxTime);
    setSucces(false);
    calculateAvailableSpaces(Day);
    setError(false);
    if (inputTime < minTime || inputTime > maxTime) {
      // Restringe la selección y restablece el valor si es necesario
      setError(true);
      setMsgError("Escoge una hora (entre 9:00 y las 17:00)");
    } else {
      const { name, value } = event.target;
      setAñadirCita({ ...añadirCita, [name]: value });
    }
  };
  const handleChangeDuration = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseInt(event.target.value, 10);
    setError(false);

    if (!isNaN(inputValue) && inputValue >= 30 && inputValue <= 90) {
      // El valor es un número válido en el rango permitido
      const { name, value } = event.target;
      setAñadirCita({ ...añadirCita, [name]: value });
    } else {
      // Si el valor no es valido, establecer mensaje de error
      setError(true);
      setMsgError("Escoge un numero entre 30 y 90");
    }
  };
  const handleChangeDia = (event: ChangeEvent<HTMLSelectElement>) => {
    setError(false);
    const { name, value } = event.target;
    if (value === "") {
      setError(true);
      setMsgError("Escoge un dia");
    } else {
      setAñadirCita({ ...añadirCita, [name]: value });
    }
  };
  const createCita = (event: React.FormEvent) => {
    event.preventDefault();
    setError(false);
    setSucces(false);
    const { Day, Duration, Hour } = añadirCita;
    if (espacios <= 0) {
      setError(true);
      setMsgError("No tenemos espacio para ese día");
      return;
    }
    if (!Day || !Duration || !Hour) {
      setError(true);
      setMsgError("Faltan valores");
      return;
    }
    //Filtrar cita por hora
    const horaExistente = citas.some((cita) => cita.Hour === Hour);
    //Si la cita coincide con la que se desea crear negar la creacion
    if (horaExistente) {
      //Establecer error y mensaje de error
      setError(true);
      setMsgError("Esa hora no esta disponible");
    } else {
      //Creacion de cita
      setCitas([...citas, añadirCita]);
      setSucces(true);
    }
  };
  return {
    error,
    msgError,
    handleChange,
    handleChangeDuration,
    handleChangeDia,
    createCita,
    succes,
  };
}

export { useAñadirCita };
