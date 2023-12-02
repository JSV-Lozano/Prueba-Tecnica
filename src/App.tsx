import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ListaCitas } from "./views/listaCitas";
import { Layaout } from "./components/Layaout";
import { AgregarCitas } from "./views/agregarCita";
import GlobalContext from "./Context";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <GlobalContext>
        <Layaout>
          <Routes>
            <Route
              path="/"
              element={<ListaCitas />}
            />
            <Route
              path="/agregar-cita"
              element={<AgregarCitas />}
            />
          </Routes>
        </Layaout>
      </GlobalContext>
    </BrowserRouter>
  );
}

export default App;
