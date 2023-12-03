import { Link } from "react-router-dom";

type LinksTypes = {
  text: string;
  link: string;
};
const Links: LinksTypes[] = [
  {
    text: "Consultar por espacios",
    link: "/",
  },
  {
    text: "Reservar cita",
    link: "/agregar-cita",
  },
];

function Header(): JSX.Element {
  return (
    <header className="w-full bg-[#131313] h-[50px] rounded-b-[10px] shadow-lg shadow-[#00000036]">
      <nav className="flex h-full justify-between items-center text-2xl">
        <h2 className="pl-4 font-bold text-blue-500 text-4xl md:text-5xl md:pl-40">
          {"<"}TuCitaYa{"/>"}
        </h2>
        <ul className="flex w-[70%] justify-around md:w-[40%]">
          {Links.map((link) => (
            <li key={link.text}>
              <Link
                to={link.link}
                className="text-white hover:text-[#1395ff] ease-in duration-300 p-2 lg:p-4 rounded-2xl font-semibold text-xl md:text-2xl lg:text-3xl"
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export { Header };
