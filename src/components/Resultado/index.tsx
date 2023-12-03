import { useContext } from "react";
import { GlobalState } from "../../Context";

function Resultado(): JSX.Element {
  const { error, espacios } = useContext(GlobalState);
  return (
    <div className="pt-4">
      {error ? (
        <p className="text-[#ff0000] bg-[#03030360] p-3 rounded-3xl font-bold text-3xl">
          Hubo un problema{" "}
        </p>
      ) : (
        espacios !== null && (
          <p className="text-3xl text-white font-bold rounded-2xl bg-[#e1e1e17d] h-[30px] w-[300px] flex justify-center items-center">
            Espacios disponibles: {espacios}
          </p>
        )
      )}
    </div>
  );
}

export { Resultado };
