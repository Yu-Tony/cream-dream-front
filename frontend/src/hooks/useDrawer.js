import { useState } from "react";

import { Drawer } from "@mui/material";

function useDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleDrawer = () => setIsOpen((prev) => !prev);
  return {
    toggle: handleToggleDrawer,
    isOpen,
  };
}

export default useDrawer;
