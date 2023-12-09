import axios from "axios";

const abogadoApi = axios.create({
  baseURL: "http://localhost:8000/api/v1/abogado/",
});

export const getAbogado = (id) => abogadoApi.get(`/${id}/`);

export const getAllAbogado = () => abogadoApi.get("/");

// export const createAbogado = (data) => abogadoApi.post("/", data);

export const createAbogado = async (data) => {
  try {
    const formData = new FormData();
    formData.append("nombre", data.nombre);
    formData.append("edad", data.edad);
    formData.append("telefono", data.telefono);
    formData.append("email", data.email);
    formData.append("foto_perfil", data.foto_perfil[0]);
    formData.append("especialidad", data.especialidad);
    formData.append("descripcion", data.descripcion);

    const response = await abogadoApi.post("/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log("Respuesta del servidor:", response.data);
    console.log(response.data.nombre);
    return response.data;
  } catch (error) {
    console.error("Error al enviar la solicitud:", error);
    throw error;
  }
};

export const deleteAbogado = (id) => abogadoApi.delete(`/${id}/`);

// export const updateAbogado = (id, abogado) =>
//   abogadoApi.put(`/${id}/`, abogado);

export const updateAbogado = async (id, data) => {
  try {
    const formData = new FormData();
    formData.append("nombre", data.nombre);
    formData.append("edad", data.edad);
    formData.append("telefono", data.telefono);
    formData.append("email", data.email);
    formData.append("especialidad", data.especialidad);
    formData.append("descripcion", data.descripcion);

    if (data.foto_perfil && data.foto_perfil[0] instanceof File) {
      formData.append("foto_perfil", data.foto_perfil[0]);
    }

    const response = await abogadoApi.put(`/${id}/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log("Respuesta del servidor:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error al enviar la solicitud:", error);
    throw error;
  }
};
