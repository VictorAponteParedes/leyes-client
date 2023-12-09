import axios from "axios";

const CasoApi = axios.create({
  baseURL: "http://localhost:8000/api/v1/caso/",
});

export const getCaso = (id) => CasoApi.get(`/${id}/`);

export const getAllCaso = () => CasoApi.get("/");

// export const createCaso = (data) => CasoApi.post("/", data);
export const createCaso = async (data) => {
  try {
    const formData = new FormData();
    formData.append("nombre", data.nombre);
    formData.append("nro_expediente", data.nro_expediente);
    formData.append("fecha", data.fecha);
    formData.append("materia", data.materia);
    formData.append("juzgado", data.juzgado);

    const response = await CasoApi.post("/", formData, {
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

export const deleteCaso = (id) => CasoApi.delete(`/${id}/`);

// export const updateCaso = (id, caso) => CasoApi.put(`/${id}/`, caso);

export const updateCaso = async (id, data) => {
  try {
    const formData = new FormData();
    formData.append("nombre", data.nombre);
    formData.append("nro_expediente", data.nro_expediente);
    formData.append("fecha", data.fecha);
    formData.append("materia", data.materia);
    formData.append("juzgado", data.juzgado);

    const response = await CasoApi.put(`/${id}/`, formData, {
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
