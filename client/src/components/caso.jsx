import { useState, useEffect } from "react";
import { getAllCaso } from "../api/caso";
import { useNavigate } from "react-router-dom";

export function ListaCaso() {
  const [caso, setCaso] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function obtenerCasos() {
      const response = await getAllCaso();
      setCaso(response.data);
    }
    obtenerCasos();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {caso.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              navigate(`/casos/${item.id}`);
            }}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:cursor-pointer hover:dark:bg-gray-700">
            <div className="p-5">
              <div className="mb-2 text-2xl font-bold tracking-tight dark:text-white">
                Caso: {item.nombre}
              </div>
              <div className="mb-2 text-2xl font-bold tracking-tight dark:text-white">
                Nro: {item.nro_expediente}
              </div>
              <div className="mb-2 text-2xl font-bold tracking-tight dark:text-white">
                Fecha: {item.fecha}
              </div>
              <div className="mb-2 text-2xl font-bold tracking-tight dark:text-white">
                Materia: {item.materia}
              </div>
              <div className="mb-2 text-2xl font-bold tracking-tight dark:text-white">
                Juzgado: {item.juzgado}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
