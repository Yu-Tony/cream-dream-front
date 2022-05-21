import { axiosBase as axios } from "./Config";

class Mesa {
  constructor() {
    this.sillas = 0;
    this.sucursal = "";
    this.disponible = false;
    this.empleado = "";
  }
}

/**
 *
 * @param {Mesa} data
 * @returns
 */
export const Create = async (data) => {
  try {
    const res = await axios.post("/mesa", data);
    if (res.status === 200) return res.data;

    return {};
  } catch (e) {
    return e;
  }
};

/**
 *
 * @param {String} id
 * @param {Mesa} data
 * @returns
 */
export const Update = async (id, data) => {
  try {
    const res = await axios.put("/mesa/" + id, data);
    if (res.status === 200) return res.data;

    return {};
  } catch (e) {
    return e;
  }
};
export const Get = async (disponible, sucursal) => {
  try {
    const params = { d: disponible, s: sucursal };
    const res = await axios.get("/mesa", { params });
    if (res.status === 200) return res.data;

    return {};
  } catch (e) {
    return e;
  }
};
