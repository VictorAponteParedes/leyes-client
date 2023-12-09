import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ListaAbogados } from "./pages/abogados/abogado";
import { FormularioCaso } from "./pages/caso/caso-create";
import { FormularioAbogado } from "./pages/abogados/abogado-create";
import { ListaCasos } from "./pages/caso/caso";
import { HomePage } from "./pages/home/home";
import { HeaderGlobal } from "./components/header-global";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <BrowserRouter basename="/app">
        <div className="container mx-auto">
          <HeaderGlobal />
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* RUTA DE CASO */}
            <Route path="/casos" element={<ListaCasos />} />
            <Route path="/casos/:id" element={<FormularioCaso />} />
            <Route path="/casos/crear" element={<FormularioCaso />} />
            {/* RUTA DE ABOGADO */}
            <Route path="/abogados" element={<ListaAbogados />} />
            <Route path="/abogados/:id" element={<FormularioAbogado />} />
            <Route path="/abogados/crear" element={<FormularioAbogado />} />
          </Routes>
        </div>
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
