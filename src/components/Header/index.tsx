import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";

function Header(): JSX.Element {
  const { pathname } = useLocation();
  return (
    <header className="flex items-center justify-between lg:justify-normal mt-60 lg:mt-[300px] 2xl:mt-0 ">
      <div className="flex items-center md:mr-56">
        <img
          className="w-[30%]"
          src={logo}
          alt="logo"
        />
        <h1 className="flex text-5xl font-bold">
          <p className="text-[#35f8ff]">TuCita</p>
          Ya
        </h1>
      </div>
      {pathname === "/home" ? (
        <Link
          to="/reservar"
          className="text-2xl md:text-3xl border p-3 rounded-xl text-center"
        >
          Reservar Cita
        </Link>
      ) : (
        <Link
          to="/home"
          className="text-2xl md:text-3xl border p-3 rounded-xl text-center"
        >
          Inicio
        </Link>
      )}
    </header>
  );
}

export { Header };
