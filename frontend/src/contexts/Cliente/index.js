import { createContext, useState, useEffect } from "react";

import * as API from "../../services/Cliente";

export const ClienteContext = createContext();

const ClienteState = (props) => {
  const [clienteId, setClienteId] = useState("");

  const Delete = async () => {
    const res = await API.Delete(clienteId);
    console.log(res);
  };

  const Login = async (data) => {
    const res = await API.Login(data);

    if (res.data) {
      setClienteId(res.data.id);
      return res;
    }

    return {};
  };

  const Logout = () => {
    setClienteId("");
  };

  const isLog = () => {
    if (clienteId != "") return true;
    return false;
  };

  return (
    <ClienteContext.Provider
      value={{ clienteId, Login, Logout, Delete, isLog }}
    >
      {props.children}
    </ClienteContext.Provider>
  );
};

export default ClienteState;
