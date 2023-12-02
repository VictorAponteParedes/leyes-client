import { useState, useEffect } from "react";
import { getAllEspecialidad } from "../api/especialidad";
import { useNavigate } from "react-router-dom";

export function ListaEspecilidad() {
  const [especialidad, setEspecilidad] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function obtenerEspecilidad() {
      const response = await getAllEspecialidad();
      setEspecilidad(response.data);
    }
    obtenerEspecilidad();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {especialidad.map((item) => (
          <div
            onClick={() => {
              navigate(`/especialidad/${item.id}`);
            }}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:cursor-pointer hover:dark:bg-gray-700"
            key={item.id}>
            <div className="p-5">
              <h5 className="text-center mb-2 text-2xl font-bold tracking-tight dark:text-white">
                {item.nombre}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
