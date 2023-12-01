/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Citaform } from "./components/CitaForm";
import { Resultado } from "./components/Resultado";
import { useCita } from "./hooks/useCita";
import { Loader } from "./components/Loader";

const AgendaCalculator: React.FC = () => {
  const { getCitas, dia, setDia, espacios, error, loading } = useCita();
  useEffect(() => {
    getCitas();
  }, []);
  return (
    <section className="App w-full h-screen flex flex-col justify-center items-center bg-[url('https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
      {loading ? (
        <Loader />
      ) : (
        <>
          <h1 className="text-4xl">Calcular espacios disponibles</h1>
          <Citaform
            getCitas={getCitas}
            dia={dia}
            setDia={setDia}
          />
          <Resultado
            espaciosDisponibles={espacios}
            error={error}
          />
        </>
      )}
    </section>
  );
};

export default AgendaCalculator;
