import * as API from "../../services/Pedido";
import * as API_cuenta from "../../services/Cuenta";

export default (state, action) => {
  const { payload, type } = action;

  const updatePedido = () => {
    if (state.id !== "") {
      API.Update(state.id, { comidas: state.comidas });
    }
  };

  switch (type) {
    case "ADD_TO_CARRITO": {
      const index = state.comidas.findIndex(
        (element) =>
          element._id === payload._id && element.opcion === payload.opcion
      );

      if (index === -1) {
        //No existe
        return { ...state, comidas: [...state.comidas, payload] };
      } else {
        //Existe
        console.log("iguales");
        const newArray = [...state.comidas];
        newArray[index].cantidad += payload.cantidad;

        return { ...state, comidas: newArray };
      }
    }

    case "REMOVE_FROM_CARRITO": {
      const newArray = [...state.comidas];

      const index = newArray.findIndex((element) => element._id === payload);

      newArray.splice(index, 1);

      //console.log(newArray);
      return { ...state, comidas: newArray };
    }

    case "UPDATE_CANTIDAD": {
      const newArray = [...state.comidas];
      const index = newArray.findIndex(
        (element) =>
          element._id === payload.productoId &&
          element.opcion === payload.opcion
      );

      newArray[index].cantidad = payload.cantidad;
      //console.log(newArray);
      return { ...state, comidas: newArray };
    }

    case "ORDENAR": {
      const updatePedido = async () => {
        const newOrder = [];
        for (let i = 0; i < state.comidas.length; i++) {
          if (!state.comidas[i].ordenado)
            newOrder.push({
              comida_id: state.comidas[i]._id,
              cantidad: state.comidas[i].cantidad,
            });
        }
        console.log(newOrder);
        const res = await API.Update(state.id, { comidas: newOrder });
        console.log(res);
      };

      updatePedido();

      const newArray = [...state.comidas];
      for (let i = 0; i < newArray.length; i++) {
        newArray[i].ordenado = true;
      }

      return { ...state, comidas: newArray };
    }

    case "EMPTY_ORDEN": {
      return { ...state, comidas: [] };
    }

    case "SET_MESA_CLIENTE": {
      return { ...state, mesa: payload.mesa, cliente: payload.cliente };
    }

    case "SET_ID": {
      return { ...state, id: payload };
    }

    default:
      return state;
  }
};
