import { axiosBase as axios } from "./Config";

class Empleado {
  constructor() {
    this.nombre = "";
    this.apellido = "";
    this.calificacion = [];
    this.sucursal = "";
    this.correo = "";
    this.contrasena = "";
    this.baja = false;
    this.admin = false;
  }
}

/**
 *
 * @param {Empleado} data
 */
export const Create = async (data) => {
  try {
    const res = await axios.post("/empleado", data);
    if (res.status === 200) return res.data;

    return {};
  } catch (e) {
    return e;
  }
};

/**
 *
 * @param {Empleado} data
 */
export const Login = async (data) => {
  try {
    const res = await axios.post("/empleado/validacion", data);
    if (res.status === 200) return res.data;

    return {};
  } catch (e) {
    return e;
  }
};

/**
 *
 * @param {String} id Identificador del empleado.
 * @param {Empleado} data Campos a modificar.
 * @returns
 */
export const Update = async (id, data) => {
  try {
    const res = await axios.put("/empleado/" + id, data);
    if (res.status === 200) return res.data;

    return {};
  } catch (e) {
    return e;
  }
};
/**
 *
 * @param {String} id Identificador del empleado
 */
export const Get = async (id) => {
  try {
    const res = await axios.get("/empleado/" + id);
    if (res.status === 200) return res.data;

    return {};
  } catch (e) {
    return e;
  }
};

/**
 *
 * @param {String} id_sucursal Identificador de la sucursal
 */
export const GetBySucursal = async (id_sucursal) => {
  try {
    const params = { s: id_sucursal };
    const res = await axios.get("/empleado", { params });
    if (res.status === 200) return res.data;
    return {};
  } catch (e) {
    return e;
  }
};
