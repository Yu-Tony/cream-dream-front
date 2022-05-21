const UNLOGGED = -1;
const CLIENTE = 0;
const EMPLEADO = 1;
const ADMIN = 2;

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case UNLOGGED: {
      return [{ label: "Iniciar Sesion", path: "Login" }];
    }

    case CLIENTE: {
      return [
        { label: "Perfil", path: "Perfil" },
        { lable: "Salir", path: "" },
      ];
    }

    case EMPLEADO: {
      return [
        { label: "Perfil", path: "Perfil" },
        { label: "Reportes", path: "Reportes" },
        { label: "QrLector", path: "QrLector" },
      ];
    }

    case ADMIN: {
      return [
        { label: "Perfil", path: "Perfil" },
        { label: "Reportes", path: "Reportes" },
        { label: "QrLector", path: "QrLector" },
        { label: "Crear", path: "Create" },
      ];
    }
  }
};
