import { Link } from "react-router-dom";

export function NavigationAbogado() {
  return (
    <div className="flex flex-wrap justify-between items-center py-4 mx-2">
      <Link to="/abogados">
        <h2 className="font-bold text-2xl mb-2 text-gray-800 dark:text-black">
          Sección de Abogados
        </h2>
      </Link>

      <button className="text-white bg-gradient-to-r bg-gray-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-black/80 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
        <Link to="/abogados/crear/" className="text-white">
          Crear Abogado
        </Link>
      </button>
    </div>
  );
}
