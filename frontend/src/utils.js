import { Drawer } from "@mui/material";

export const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

export const createDrawer = (Component, toggle, isOpen) => (
  <Drawer anchor="right" open={isOpen} onClose={toggle}>
    <Component toggleDrawer={toggle} />
  </Drawer>
);
