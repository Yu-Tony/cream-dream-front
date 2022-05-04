import { axiosBase as axios } from "./Config";

class Combo {
  constructor() {
    this.nombre = "";
    this.descripcion = "";
    this.comidas = [];
    this.precio = 0;
  }
}

/**
 *
 * @param {Combo} data
 * @returns
 */
export const Create = async (data) => {
  try {
    const res = await axios.post("/combo", data);
    if (res.status === 200) return res.data;

    return {};
  } catch (e) {
    return e;
  }
};

/**
 *
 * @param {String} id
 * @param {Combo} data
 * @returns
 */
export const Update = async (id, data) => {
  try {
    const res = await axios.put("/combo/" + id, data);
    if (res.status === 200) return res.data;

    return {};
  } catch (e) {
    return e;
  }
};
export const Delete = async (id) => {
  try {
    const res = await axios.delete("/combo/" + id);
    if (res.status === 200) return res.data;

    return {};
  } catch (e) {
    return e;
  }
};
export const Get = async () => {
  try {
    const res = await axios.get("/combo");
    if (res.status === 200) return res.data;

    return {};
  } catch (e) {
    return e;
  }
};
export const GetById = async (id) => {
  try {
    const res = await axios.get("/combo/" + id);
    if (res.status === 200) return res.data;

    return {};
  } catch (e) {
    return e;
  }
};
