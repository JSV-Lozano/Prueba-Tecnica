import { Header } from "../Header";
import gif from "../../assets/NMkg.gif";
type LayaoutProps = {
  children: React.ReactNode;
};
type ListProps = {
  text: string;
  id: number;
};
const PropList: ListProps[] = [
  { text: "Preferido por especialistas en Colombia.", id: 1 },
  { text: "Agenda y registros digitales para tus pacientes.", id: 2 },
  { text: "Consulta en línea con un sistema fácil de usar.", id: 3 },
];
function Layaout({ children }: LayaoutProps) {
  return (
    <>
      <section className="w-full h-[100vh] flex flex-col 2xl:flex-row justify-center lg:items-center lg:p-96">
        <div className="text-white w-full flex flex-col md:mt-48 lg:mt-0">
          <Header />
          <h2 className="text-3xl text-center md:text-start mt-10 mb-10 lg:mt-0 lg:mb-0 md:text-6xl p-3 md:p-0">
            El mejor software médico para la gestión completa de tu consultorio
          </h2>
          <img
            className="rounded-2xl lg:mt-10 lg:mb-10"
            src={gif}
            alt="gif-Doctor"
          />
          {PropList.map((list) => (
            <p
              key={list.id}
              className="flex items-center text-2xl md:text-4xl mt-5"
            >
              <img
                src="https://pro.doctoralia.co/hubfs/2021%20DOC-FAC%20Merge%20Project/Common%20assets/Icons/icon-check.svg"
                alt=""
              />
              {list.text}
            </p>
          ))}
        </div>
        <div className="w-full h-[700px] rounded-[50px] shadow-shadow-form flex flex-col justify-center lg:ml-10">
          {children}
        </div>
      </section>
    </>
  );
}

export { Layaout };
