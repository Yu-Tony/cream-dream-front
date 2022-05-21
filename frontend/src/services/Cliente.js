import { axiosBase as axios } from "./Config";

/**
 * Data Structure:
 * {
 *      nombre,
 *      apellido,
 *      correo,
 *      contraseña
 * }
 */
export const Signup = async (data) => {
  try {
    const res = await axios.post("/cliente", data);
    if (res.status === 200) {
      return res.data;
      /*if (res.success) return res.data;
      else
        return {
          error_code: res.data.error_code,
        };*/
    }

    return {};
  } catch (e) {
    return false;
  }
};

/**
 * Data Structure:
 * {
 *      correo,
 *      contraseña
 * }
 */
export const Login = async (data) => {
  try {
    const res = await axios.post("/cliente/validacion", data);

    if (res.status === 200) return res.data;

    return {};
  } catch (e) {
    return e;
  }
};

export const Update = async (id, data) => {
  try {
    const res = await axios.put("/cliente/" + id, data);

    if (res.status === 200) return res.data;

    return {};
  } catch (e) {
    return e;
  }
};

export const Delete = async (id) => {
  try {
    const res = await axios.delete("/cliente/" + id);

    if (res.status === 200) return res.data;

    return {};
  } catch (e) {
    return e;
  }
};
