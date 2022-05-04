import { axiosBase as axios } from "./Config";

export const GetAll = async () => {
  try {
    const response = await axios.get("/comidas-menu");

    if (response.status === 200) return response.data;
    else return {};
  } catch (e) {
    console.error(e);
    return e;
  }
};
