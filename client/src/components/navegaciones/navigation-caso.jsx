import { Link } from "react-router-dom";

export function NavigationCaso() {
  return (
    <div className="flex justify-between py-4">
      <Link to="/casos">
        <h2 className="font-bold text-3xl mb-4 text-gray-800 dark:text-black">
          Sección de Caso
        </h2>
      </Link>

      <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-3">
        <Link to="/casos/crear/" className="text-white">
          Crear Caso
        </Link>
      </button>
    </div>
  );
}
