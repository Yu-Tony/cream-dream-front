import { axiosBase as axios } from "./Config";
import { objectToFormData } from "../utils";

class Sucursal {
  constructor() {
    this.nombre = "";
    this.direccion = "";
    this.telefono = "";
    this.calificacion = [];
    this.baja = false;
  }
}

/**
 *
 * @param {Sucursal} data
 */
export const Create = async (data) => {
  try {
    const headers = {
      "Content-Type": "multipart/form-data",
    };
    const formData = objectToFormData(data);
    const res = await axios.post("/sucursal", formData, { headers });
    if (res.status === 200) return res.data;

    return {};
  } catch (e) {
    return e;
  }
};

export const GetAll = async () => {
  try {
    const res = await axios.get("/sucursal");
    if (res.status === 200) return res.data;

    return {};
  } catch (e) {
    return e;
  }
};

export const Get = async (id) => {
  try {
    const res = await axios.get("/sucursal/" + id);
    if (res.status === 200) return res.data;

    return {};
  } catch (e) {
    return e;
  }
};

/**
 *
 * @param {String} id
 * @param {Sucursal} data
 * @returns
 */
export const Update = async (id, data) => {
  try {
    const res = await axios.put("/sucursal/" + id, data);

    if (res.status === 200) return res.data;

    return {};
  } catch (e) {
    return e;
  }
};
