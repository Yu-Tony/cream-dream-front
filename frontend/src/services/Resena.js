import { axiosBase as axios } from "./Config";

class Resena {
  constructor() {
    this.calificacion = 0;
    this.descripcion = "";
    this.tipo = false;
    this.idTipo = "";
    this.onModel = "";
  }
}

/**
 *
 * @param {Resena} data
 * @returns
 */
export const Create = async (data) => {
  try {
    const res = await axios.post("/resena", data);
    if (res.status === 200) return res.data;

    return {};
  } catch (e) {
    return e;
  }
};
export const Delete = async (id) => {
  try {
    const res = await axios.delete("/resena/" + id);
    if (res.status === 200) return res.data;

    return {};
  } catch (e) {
    return e;
  }
};
export const Get = async (id, type) => {
  try {
    const params = { t: type };
    const res = await axios.get("/resena/" + id, { params });
    if (res.status === 200) return res.data;

    return {};
  } catch (e) {
    return e;
  }
};
