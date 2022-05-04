import { axiosBase as axios } from "./Config";

class Reservacion {
  constructor() {
    this.mesa = "";
    this.fecha = "";
    this.no_personas = "";
  }
}

/**
 *
 * @param {Reservacion} data
 * @returns
 */
export const Create = async (data) => {
  try {
    const res = await axios.post("/reservacion", data);
    if (res.status === 200) return res.data;

    return {};
  } catch (e) {
    return e;
  }
};
export const Delete = async (id) => {
  try {
    const res = await axios.delete("/reservacion/" + id);
    if (res.status === 200) return res.data;

    return {};
  } catch (e) {
    return e;
  }
};
export const GetById = async (id) => {
  try {
    const res = await axios.get("/reservacion/" + id);
    if (res.status === 200) return res.data;

    return {};
  } catch (e) {
    return e;
  }
};
export const GetbyPeopleDateSucursal = async (personas, sucursal) => {
  try {
    const params = { p: personas, s: sucursal };
    const res = await axios.get("/reservacion", { params });
    if (res.status === 200) return res.data;

    return {};
  } catch (e) {
    return e;
  }
};
