import { Drawer } from "@mui/material";

export const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

export const createDrawer = (Component, toggle, isOpen) => (
  <Drawer anchor="right" open={isOpen} onClose={toggle}>
    <Component toggleDrawer={toggle} />
  </Drawer>
);

export const objectToFormData = (data) => {
  const formData = new FormData();
  for (var key in data) {
    if (key === "imagenes") {
      let i = 0;
      for (const img of data.imagenes) {
        formData.append(key, img);
        i++;
      }
    } else formData.append(key, JSON.stringify(data[key]));
  }

  return formData;
};

export const calcularSubtotal = (cuenta) => {
  var subtotal = 0;
  for (let i = 0; i < cuenta.length; i++) {
    if (cuenta[i].pedido) subtotal += cuenta[i].precio * cuenta[i].cantidad;
  }

  return subtotal;
};
