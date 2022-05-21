import { axiosBase as axios } from "./Config";

class Pedido {
  constructor() {
    this.comidas = [];
    this.combos = [];
    this.mesa = "";
    this.subtotal = 0;
  }
}

export const Update = async (id, data) => {
  try {
    const res = await axios.put("/pedido/" + id, data);
    if (res.status === 200) return res.data;

    return {};
  } catch (e) {
    return e;
  }
};

export const GetById = async (id) => {
  try {
    const res = await axios.get("/pedido/" + id);
    if (res.status === 200) return res.data;

    return {};
  } catch (e) {
    return e;
  }
};
