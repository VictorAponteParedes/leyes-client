import { getAbogado } from "../../../api/abogado";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function DetalleAbogado() {
  const [abogado, setAbogado] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function loadAbogado() {
      try {
        const response = await getAbogado(id);
        setAbogado(response.data);
      } catch (error) {
        console.error("Error al obtener el abogado:", error);
      }
    }
    loadAbogado();
  }, [id]);

  return (
    <section
      className="bg-center bg-no-repeat bg-cover bg-gray-700 bg-blend-multiply text-white"
      style={{
        backgroundImage: `url('${abogado.foto_perfil}')`,
      }}>
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-left lg:text-center">
          {abogado.nombre}
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-8 lg:px-16 text-left lg:text-center">
          {abogado.descripcion}
          <br />
          <strong>Especialidad:</strong> {abogado.especialidad}
          <br />
          <strong>Edad:</strong> {abogado.edad}
          <br />
          <strong>Email:</strong> {abogado.email}
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href={`/abogados/${abogado.id}`}
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            Editar
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
