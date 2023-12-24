import axios from "axios";

const usuarioApi = axios.create({
  baseURL: "http://localhost:8000/api/v1/usuarios/",
});

export const createUsuario = (data) => usuarioApi.post("/", data);
