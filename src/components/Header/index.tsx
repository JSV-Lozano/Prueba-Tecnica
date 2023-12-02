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
    <header className="w-full bg-white h-[40px] rounded-b-[10px] shadow-lg shadow-[#00b7ff36]">
      <nav className="flex h-full justify-between items-center text-2xl">
        <h2 className="pl-4 font-bold text-blue-500 text-4xl">TuCitaYa</h2>
        <ul className="flex w-[70%] justify-around md:w-[40%]">
          {Links.map((link) => (
            <li
              key={link.text}
              className="hover:bg-[#00b8ff99] ease-in duration-300 p-2 rounded-2xl font-semibold"
            >
              <Link to={link.link}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export { Header };
