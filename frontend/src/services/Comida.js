import { axiosBase as axios } from "./Config";
import { objectToFormData } from "../utils";

class Comida {
  constructor() {
    this.nombre = "";
    this.descripcion = "";
    this.cantidad = 0;
    this.precio = {};
    this.baja = false;
    this.categoria = [];
    this.imagenes = [];
  }
}

/**
 *
 * @param {Comida} data
 * @returns
 */
export const Create = async (data) => {
  try {
    const headers = {
      "Content-Type": "multipart/form-data",
    };
    const formData = objectToFormData(data);
    const res = await axios.post("/comida", formData, { headers });
    if (res.status === 200) return res.data;

    return {};
  } catch (e) {
    return e;
  }
};
export const Update = async (id, data) => {
  try {
    const headers = {
      "Content-Type": "multipart/form-data",
    };
    const formData = objectToFormData(data);
    const res = await axios.put("/comida/" + id, formData, { headers });
    if (res.status === 200) return res.data;

    return {};
  } catch (e) {
    return e;
  }
};
export const GetById = async (id) => {
  try {
    const res = await axios.get("/comida/" + id);
    if (res.status === 200) return res.data;

    return {};
  } catch (e) {
    return e;
  }
};

/**
 *
 * @param {String} query Texto a buscar.
 * @param {String} filter 'C' para buscar por categorias, 'N' para buscar por nombre.
 * @returns
 */
export const GetByQuery = async (query, filter) => {
  try {
    const params = filter === "N" ? { n: query } : { c: query };
    const res = await axios.get("/comida", { params });
    if (res.status === 200) return res.data;

    return {};
  } catch (e) {
    return e;
  }
};
export const GetMenu = async (categoria) => {
  try {
    const params = { categoria: categoria };
    const res = await axios.get("/comidas-menu", { params });
    if (res.status === 200) return res.data;

    return {};
  } catch (e) {
    return e;
  }
};
