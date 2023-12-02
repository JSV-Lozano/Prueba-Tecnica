/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { Loader } from "../components/Loader";
import { Citaform } from "../components/CitaForm";
import { Resultado } from "../components/Resultado";
import { GlobalState } from "../Context";
import axios from "axios";
const URL_API: string =
  "https://luegopago.blob.core.windows.net/luegopago-uploads/Pruebas%20LuegoPago/data.json";
const ListaCitas: React.FC = () => {
  const { setCitas, setLoading, loading, setError, citas } =
    useContext(GlobalState);
  useEffect(() => {
    const getCitas = async () => {
      if (citas.length <= 0) {
        setError(false);
        setLoading(true);
        try {
          // Hacer la solicitud con Axios
          const response = await axios.get(URL_API);
          // Obtenemos las citas de la respuesta
          const listCitas = response.data;
          setCitas(listCitas);
        } catch (error) {
          setError(true);
        }
      } else {
        return citas;
      }
      setLoading(false);
    };
    getCitas();
  }, []);

  return (
    <section className="App w-full h-screen flex flex-col justify-center items-center">
      {loading ? (
        <Loader />
      ) : (
        <>
          <h1 className="text-4xl text-blue-500 font-bold">
            Calcular espacios disponibles
          </h1>
          <Citaform />
          <Resultado />
        </>
      )}
    </section>
  );
};

export { ListaCitas };
