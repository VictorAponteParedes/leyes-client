import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ListaEspecilidades } from "./pages/especialidad/especialidad";
import { FormularioEspecilidad } from "./pages/especialidad/especilidad-create";
import { HomePage } from "./pages/home/home";
import { Navigation } from "./components/navigation";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <BrowserRouter basename="/app">
        <div className="container mx-auto">
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* RUTA DE ESPECILIDADES */}
            <Route path="/especialidad" element={<ListaEspecilidades />} />
            <Route
              path="/especialidad/:id"
              element={<FormularioEspecilidad />}
            />
            <Route
              path="/especialidad/crear"
              element={<FormularioEspecilidad />}
            />
          </Routes>
        </div>
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
