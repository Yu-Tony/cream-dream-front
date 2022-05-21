import { axiosBase as axios } from "./Config";

export const Create = async (data) => {
  try {
    const res = await axios.post("/reservacion", data);

    if (res.status === 200) {
      return res.data;
    }
  } catch (e) {
    return false;
  }
};

export const GetAll = async (id) => {
    try {
      const res = await axios.get("/sucursal");
      if (res.status === 200) return res.data;
  
      return {};
    } catch (e) {
      return e;
    }
  };
