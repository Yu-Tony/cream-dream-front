import { axiosBase as axios } from "./Config";

class Cuenta {
  constructor() {
    this.pedido = "";
    this.total = 0;
    this.propina = 0;
    this.metodo = "";
    this.cliente = "";
  }
}

export const Create = async (data) => {
  try {
    const res = await axios.post("/cuenta", data);
    if (res.status === 200) return res.data;

    return {};
  } catch (e) {
    return e;
  }
};
