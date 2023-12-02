import { createContext, ReactNode, useState } from "react";

type ContextProps = {
  children: ReactNode;
};
type Cita = {
  Day: string;
  Hour: string;
  Duration: string;
};

type GlobalContextValue = {
  citas: Cita[];
  setCitas: React.Dispatch<React.SetStateAction<Cita[]>>;
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  espacios: number;
  setEspacios: React.Dispatch<React.SetStateAction<number>>;
  createCita: string[];
  setCreateCita: React.Dispatch<React.SetStateAction<string[]>>;
};

export const GlobalState = createContext<GlobalContextValue>({
  citas: [],
  setCitas: () => {},
  error: false,
  setError: () => {},
  loading: false,
  setLoading: () => {},
  espacios: 0,
  setEspacios: () => {},
  createCita: [],
  setCreateCita: () => {},
});

function GlobalContext({ children }: ContextProps) {
  const [citas, setCitas] = useState<Cita[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [espacios, setEspacios] = useState<number>(0);
  const [createCita, setCreateCita] = useState<string[]>([]);
  return (
    <GlobalState.Provider
      value={{
        citas,
        setCitas,
        error,
        setError,
        loading,
        setLoading,
        espacios,
        setEspacios,
        createCita,
        setCreateCita,
      }}
    >
      {children}
    </GlobalState.Provider>
  );
}

export default GlobalContext;
