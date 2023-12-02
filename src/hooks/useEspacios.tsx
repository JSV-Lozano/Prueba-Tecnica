import { useContext } from "react";
import { GlobalState } from "../Context";

function useEspacios() {
  const { citas: cita, setEspacios } = useContext(GlobalState);
  const calculateAvailableSpaces = (dia: string | null): number => {
    // Verificación de que cita está inicializado y no es nulo
    if (!cita || !cita.length) {
      return 0;
    }

    // Filtrar citas por el día deseado
    const citaOnDay = cita.filter((cita) => cita.Day === dia);

    // Calcular el total de minutos disponibles de (9:00 a 17:00)
    const totalAvailableMinutes = 8 * 60;

    // Calcular el total de minutos ocupados dentro del horario de atención
    const occupiedMinutes = citaOnDay.reduce((total, appointment) => {
    // Crear objetos Date para la hora de inicio y fin de la cita
      const startTime = new Date(`2023-01-01T${appointment.Hour}`);
      const endTime = new Date(
        startTime.getTime() + parseInt(appointment.Duration, 10) * 60000
      );

      // Verificar si la cita está dentro del horario de atención
      if (startTime.getHours() >= 9 && endTime.getHours() <= 17) {
      // Si la cita está dentro del horario, agregar su duración al total ocupado
        return total + parseInt(appointment.Duration, 10);
      }

      return total;
    }, 0);

    // Calcular espacios disponibles en minutos
    const availableSpacesMinutes = totalAvailableMinutes - occupiedMinutes;

    // Redondear el resultado final al número entero más cercano
    const availableSpacesCount = Math.floor(availableSpacesMinutes / 30);

    setEspacios(availableSpacesCount);
    return 0;
  };
  return calculateAvailableSpaces;
}

export { useEspacios };
