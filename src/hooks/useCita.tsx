import axios from "axios";
import { useState } from "react";

interface Appointment {
  Day: string;
  Hour: string;
  Duration: string;
}

const URL_API: string =
  "https://luegopago.blob.core.windows.net/luegopago-uploads/Pruebas%20LuegoPago/data.json";

function useCita() {
  const [cita, setCita] = useState<Appointment[]>([]);
  const [dia, setDia] = useState<string>("lunes");
  const [espacios, setEspacios] = useState<number>(0);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  // Función para obtener las citas
  const getCitas = async () => {
    setError(false);
    setLoading(true);
    try {
      // Hacer la solicitud con Axios
      const response = await axios.get(URL_API);
      // Obtenemos las citas de la respuesta
      const citas = response.data;
      setCita(citas);
      const calculateAvailableSpaces = (day: string | null): number => {
        // Verificación de que cita está inicializado y no es nulo
        if (!cita || !cita.length) {
          return 0;
        }

        // Filtrar citas por el día deseado
        const citaOnDay = cita.filter((appointment) => appointment.Day === day);

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

      calculateAvailableSpaces(dia);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };
  return { dia, setDia, getCitas, espacios, error, loading };
}

export { useCita };
