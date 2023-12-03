import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layaout } from "./components/Layaout";
import { Home } from "./views/home";
import { ReservarCita } from "./views/reservar";
import GlobalContext from "./Context";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <GlobalContext>
        <Layaout>
          <Routes>
            <Route
              path="/home"
              element={<Home />}
            />
            <Route
              path="/reservar"
              element={<ReservarCita />}
            />
          </Routes>
        </Layaout>
      </GlobalContext>
    </BrowserRouter>
  );
}

export default App;
