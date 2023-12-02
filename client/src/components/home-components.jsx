import cardAbogado from "../assets/fondo_abogado_card.jpg";
import cardClient from "../assets/fondo_cliente_card.jpg";

export function Home() {
  return (
    <>
      <div className="flex flex-col items-center  sm:flex-row sm:justify-center sm:space-x-4">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md transition-transform transform hover:scale-105 dark:bg-gray-800 dark:border-gray-700">
          <img
            className="rounded-t-lg"
            src={cardAbogado} // Ajusta la ruta de la imagen aquí
            alt=""
          />

          <div className="p-5">
            <a href="/app/especialidad">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                ¿Eres abogado?
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Descubre una amplia variedad de casos y oportunidades laborales en
              el mundo legal. Explora recursos valiosos y conecta con
              profesionales del derecho.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Ver mas!
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"></svg>
            </a>
          </div>
        </div>

        {/* SEGUNDO CARD */}

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md transition-transform transform hover:scale-105 dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src={cardClient} alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                ¿Buscas asesoramiento legal?
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Encuentra el apoyo que necesitas. Explora servicios legales, obtén
              asesoramiento de expertos y resuelve tus problemas legales con
              confianza.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Ver mas!
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"></svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
