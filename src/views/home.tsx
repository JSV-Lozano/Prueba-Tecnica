import axios from "axios";
import { useContext, useEffect } from "react";
import { GlobalState } from "../Context";
import { Citaform } from "../components/CitaForm";
import { Loader } from "../components/Loader";

const URL_API: string =
  "https://luegopago.blob.core.windows.net/luegopago-uploads/Pruebas%20LuegoPago/data.json";

function Home() {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <>{loading ? <Loader /> : <Citaform />}</>;
}

export { Home };
