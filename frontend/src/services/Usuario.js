import { axiosBase as axios } from "./Config";

export const Create = async (data) => {
  try {
    const res = await axios.post("/usuario", data);

    if (res.status === 200) {
      return res.data;
    }
  } catch (e) {
    return e;
  }
};

export const Login = async (data) => {
  try {
    const res = await axios.post("/usuario/validacion", data);

    if (res.status === 200) return res.data;

    return {};
  } catch (e) {
    return e;
  }
};

export const Update = async (id, data) => {
  try {
    const res = await axios.put("/usuario/" + id, data);
  } catch (e) {
    return e;
  }
};

export const Delete = async (id) => {
  try {
    const res = await axios.delete("/usuario/" + id);

    if (res.status === 200) return res.data;

    return {};
  } catch (e) {
    return e;
  }
};

export const GetById = async (id) => {
  try {
    const res = await axios.get("/usuario/" + id);
    if (res.status === 200) return res.data;

    return {};
  } catch (e) {
    return e;
  }
};

export const GetBySucursal = async (id_sucursal) => {
  try {
    const params = { s: id_sucursal };
    const res = await axios.get("/usuario", { params });
    if (res.status === 200) return res.data;
    return {};
  } catch (e) {
    return e;
  }
};
