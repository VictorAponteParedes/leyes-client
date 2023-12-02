import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import {
  createEspecilidad,
  updateEspecilidad,
  getEspecialidad,
  deleteEspecialidad,
} from "../../api/especialidad";
import { toast } from "react-hot-toast";
import { useEffect } from "react";

export function FormularioEspecilidad() {
  const { handleSubmit, register, setValue } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  const onsubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateEspecilidad(params.id, data);
      toast.success("Especilidad actualizado correctamente.", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "white",
        },
      });
    } else {
      await createEspecilidad(data);
      toast.success("Especilidad creado correctamente.", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "white",
        },
      });
      console.log(data.nombre);
    }
    navigate("/especialidad");
  });

  useEffect(() => {
    async function obtenerEspecilidad() {
      if (params.id) {
        const {
          data: { nombre },
        } = await getEspecialidad(params.id);
        setValue("nombre", nombre);
      }
    }
    obtenerEspecilidad();
  });

  return (
    <>
      <form onSubmit={onsubmit}>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
          Nombre de la especilidad
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          placeholder="Nombre del producto"
          {...register("nombre", { required: true })}
        />

        <div className="flex justify-end">
          <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-3">
            Guardar
          </button>
          {params.id && (
            <button
              className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-3"
              onClick={async () => {
                const aceptado = window.confirm(
                  "Estas seguro que quieres eliminar?"
                );
                if (aceptado === true) {
                  await deleteEspecialidad(params.id);
                  toast.success("Producto eliminado correctamente.", {
                    position: "bottom-right",
                    style: {
                      background: "#101010",
                      color: "white",
                    },
                  });
                  navigate("/especialidad");
                }
              }}>
              Eliminar
            </button>
          )}
        </div>
      </form>
    </>
  );
}
