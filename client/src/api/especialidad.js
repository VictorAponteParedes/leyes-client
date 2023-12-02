import axios from "axios";

const especialidadApi = axios.create({
  baseURL: "http://localhost:8000/api/v1/especialidad/",
});

export const getEspecialidad = (id) => especialidadApi.get(`/${id}/`);

export const getAllEspecialidad = () => especialidadApi.get("/");

export const createEspecilidad = (data) => especialidadApi.post("/", data);

export const deleteEspecialidad = (id) => especialidadApi.delete(`/${id}/`);

export const updateEspecilidad = (id, especialidad) =>
  especialidadApi.put(`/${id}/`, especialidad);
