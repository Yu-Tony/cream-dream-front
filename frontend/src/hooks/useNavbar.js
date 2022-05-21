import { useState } from "react";

function useNavbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return {
    nav: {
      anchor: anchorElNav,
      handleClose: handleCloseNavMenu,
      handleOpen: handleOpenNavMenu,
    },
    user: {
      anchor: anchorElUser,
      handleClose: handleCloseUserMenu,
      handleOpen: handleOpenUserMenu,
    },
  };
}

export default useNavbar;
