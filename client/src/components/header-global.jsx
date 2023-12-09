import logoHeader from "../assets/icono_leyes.png";
import { Link } from "react-router-dom";

export function HeaderGlobal() {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={"/"}>
          <img src={logoHeader} alt="Logo" className="w-12 h-12" />
        </Link>
        {/* Puedes ajustar las clases y estilos según tus necesidades */}
        <nav className="flex">
          <Link to="/casos" className="mx-2">
            Casos
          </Link>
          <Link to="/abogados" className="mx-2">
            Abogados
          </Link>
          <Link to="/clientes" className="mx-2 mr-10">
            Clientes
          </Link>
        </nav>
      </div>
    </header>
  );
}
