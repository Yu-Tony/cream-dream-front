import { axiosBase as axios } from "./Config";

class Promocion {
  constructor() {
    this.nombre = "";
    this.descripcion = "";
    this.porcentaje = 0;
    this.tiempo = "";
  }
}

/**
 *
 * @param {Promocion} data
 * @returns
 */
export const Create = async (data) => {
  try {
    const res = await axios.post("/promo", data);
    if (res.status === 200) return res.data;

    return {};
  } catch (e) {
    return e;
  }
};

export const Delete = async (id) => {
  try {
    const res = await axios.delete("/promo/" + id);
    if (res.status === 200) return res.data;

    return {};
  } catch (e) {
    return e;
  }
};

export const GetAll = async () => {
  try {
    const res = await axios.get("/promo");
    if (res.status === 200) return res.data;

    return {};
  } catch (e) {
    return e;
  }
};
