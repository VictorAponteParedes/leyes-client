import { useForm, Controller } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import {
  createAbogado,
  updateAbogado,
  getAbogado,
  deleteAbogado,
} from "../../api/abogado";
import { toast } from "react-hot-toast";
import { useEffect } from "react";

export function FormularioAbogado() {
  const {
    handleSubmit,
    register,
    setValue,
    control,

    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  const onsubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateAbogado(params.id, data);
      toast.success("Abogado actualizado correctamente.", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "white",
        },
      });
    } else {
      await createAbogado(data);
      toast.success("Abogado creado correctamente.", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "white",
        },
      });
      console.log(data.nombre);
    }
    navigate("/abogados");
  });

  useEffect(() => {
    async function obtenerAbogado() {
      if (params.id) {
        const {
          data: {
            nombre,
            edad,
            telefono,
            foto_perfil,
            email,
            especialidad,
            descripcion,
          },
        } = await getAbogado(params.id);

        setValue("nombre", nombre);
        setValue("edad", edad);
        setValue("telefono", telefono);
        setValue("email", email);
        setValue("foto_perfil", [{ name: foto_perfil }]);
        setValue("especialidad", especialidad);
        setValue("descripcion", descripcion);
      }
    }

    obtenerAbogado();
  }, [params.id, setValue]);

  return (
    <>
      <form onSubmit={handleSubmit(onsubmit)} className="mx-2 mt-10">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
          Nombre del abogado
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          placeholder="Nombre del abogado"
          {...register("nombre", { required: true })}
        />
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
          Edad
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          placeholder="Edad"
          {...register("edad", { required: true })}
        />
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
          Teléfono
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          placeholder="Teléfono"
          {...register("telefono", { required: true })}
        />
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
          Correo Electrónico
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          placeholder="Correo Electrónico"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && (
          <p className="error-message">
            Por favor, introduce una dirección de correo electrónico válida.
          </p>
        )}
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
          Foto de Perfil
        </label>

        <Controller
          control={control}
          name="foto_perfil"
          defaultValue={[]}
          render={({ field }) => (
            <>
              <input
                className="hidden"
                type="file"
                id="foto_perfil"
                onChange={(e) => field.onChange(e.target.files)}
              />
              <label
                htmlFor="foto_perfil"
                className="cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                Subir Foto
              </label>
              {field.value && field.value[0] && (
                <span className="ml-2">{field.value[0].name}</span>
              )}
            </>
          )}
        />
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
          Especialidad
        </label>
        <textarea
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Especialidad"
          {...register("especialidad", { required: true })}
        />
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
          Descripción
        </label>
        <textarea
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Descripción"
          {...register("descripcion", { required: true })}
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
                  await deleteAbogado(params.id);
                  toast.success("Abogado eliminado correctamente.", {
                    position: "bottom-right",
                    style: {
                      background: "#101010",
                      color: "white",
                    },
                  });
                  navigate("/abogados");
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
