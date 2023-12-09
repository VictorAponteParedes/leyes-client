import { useForm, Controller } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { updateCaso, getCaso, deleteCaso, createCaso } from "../../api/caso";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import axios from "axios";

export function FormularioCaso() {
  const {
    handleSubmit,
    setValue,
    register,
    control,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  const [materia, setMateria] = useState([]);

  const onsubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateCaso(params.id, data);
      toast.success("Caso actualizado correctamente.", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "white",
        },
      });
    } else {
      await createCaso(data);
      toast.success("Caso creado correctamente.", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "white",
        },
      });
      console.log(data.nombre);
    }
    navigate("/casos");
  });

  useEffect(() => {
    async function obtenerCaso() {
      if (params.id) {
        const {
          data: { nombre, nro_expediente, fecha, materia, juzgado },
        } = await getCaso(params.id);
        setValue("nombre", nombre);
        setValue("nro_expediente", nro_expediente);
        setValue("fecha", fecha);
        setValue("materia", materia);
        setValue("juzgado", juzgado);
      }
    }
    obtenerCaso();
  }, []);

  useEffect(() => {
    Promise.all([axios.get("http://localhost:8000/api/v1/caso/")])
      .then((responses) => {
        const [materiaResponse] = responses;
        setMateria(materiaResponse.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <>
      <form onSubmit={onsubmit}>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
          Nombre del caso
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          placeholder="Nombre del caso"
          {...register("nombre", { required: true })}
        />

        <label className="block mt-3 mb-2 text-sm font-medium text-gray-900 dark:text-black">
          Número de expediente
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          placeholder="Número de expediente"
          {...register("nro_expediente", { required: true })}
        />

        <label className="block mt-3 mb-2 text-sm font-medium text-gray-900 dark:text-black">
          Fecha
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="date"
          {...register("fecha", { required: true })}
        />

        <label className="block mt-3 mb-2 text-sm font-medium text-gray-900 dark:text-black">
          Materia
        </label>
        <Controller
          name="opcion"
          control={control}
          defaultValue=""
          rules={{ required: "Este campo es requerido" }}
          render={({ field }) => (
            <div>
              <select
                {...field}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="" label="Materia" disabled />
                {materia.map((opcion) => (
                  <option key={opcion.id} value={opcion.id}>
                    {opcion.materia}
                  </option>
                ))}
              </select>
              {errors.opcion && (
                <p className="error-message">{errors.opcion.message}</p>
              )}
            </div>
          )}
        />

        <label className="block mt-3 mb-2 text-sm font-medium text-gray-900 dark:text-black">
          Juzgado
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          placeholder="Juzgado"
          {...register("juzgado", { required: true })}
        />

        <div className="flex justify-end mt-3">
          <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Guardar
          </button>
          {params.id && (
            <button
              className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              onClick={async () => {
                const aceptado = window.confirm(
                  "¿Estás seguro que quieres eliminar?"
                );
                if (aceptado === true) {
                  await deleteCaso(params.id);
                  toast.success("Caso eliminado correctamente.", {
                    position: "bottom-right",
                    style: {
                      background: "#101010",
                      color: "white",
                    },
                  });
                  navigate("/casos");
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
