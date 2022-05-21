import React, { useContext } from "react";
import {
  AccountCircle,
  Search,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Container, Typography, Button, Grid, Box } from "@mui/material";
import { Link } from "react-router-dom";

import { Image } from "mui-image";
import logoCD from "../../pages/images/logoCD.png";

import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  Avatar,
  Tooltip,
  MenuItem,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import { ClienteContext } from "../../contexts/Cliente";
import LinkButton from "./LinkButton";
import useNavbar from "../../hooks/useNavbar";

const pages = ["Sucursales", "Menu", "Reservacion", "Ayuda"];
const pages2 = ["Buscar", "Carrito"];

const appbarStyle = {
  width: "100%",
  display: "flex",
  justifyContent: "flex-start",
  bgcolor: "primary.dark",
};

export default function Navbar({ toggleBusqueda, toggleCarrito }) {
  const { user, nav } = useNavbar();

  const { isLog, Logout, settings } = useContext(ClienteContext);

  return (
    <AppBar position="static" sx={appbarStyle}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={nav.handleOpen}
              sx={{ color: "text.main" }}
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={nav.anchor}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(nav.anchor)}
              onClose={nav.handleClose}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={`/${page}`} onClick={nav.handleClose}>
                  <Link to={`/${page}`} style={{ textDecoration: "none" }}>
                    <Typography textAlign="center">{page}</Typography>
                  </Link>
                </MenuItem>
              ))}

              <MenuItem onClick={nav.handleClose}>
                <Button onClick={toggleBusqueda}>
                  <Search
                    sx={{
                      color: "text.primary",
                      fontSize: 35,
                    }}
                  />
                </Button>
              </MenuItem>

              <MenuItem onClick={nav.handleClose}>
                <Button onClick={toggleCarrito}>
                  <ShoppingCartOutlined
                    sx={{
                      color: "text.primary",
                      fontSize: 35,
                    }}
                  />
                </Button>
              </MenuItem>
            </Menu>
          </Box>

          <Box
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <Image
                src={logoCD}
                fit="cover"
                duration={0}
                height={70}
                width={150}
              />
            </Link>
          </Box>

          {/* */}

          <Box sx={{ paddingRight: { md: 0, lg: "5%" } }}>
            <Tooltip title="Opciones de Usuario">
              <AccountCircle
                onClick={user.handleOpen}
                sx={{
                  color: "#644838",
                  fontFamily: "Outfit",
                  fontSize: 50,
                  m: 1,
                }}
              >
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </AccountCircle>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={user.anchor}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(user.anchor)}
              onClose={user.handleClose}
            >
              {settings.map((setting, i) => (
                <Link
                  key={i}
                  to={`/${setting.path}`}
                  style={{ textDecoration: "none", padding: 0, margin: 0 }}
                >
                  <MenuItem onClick={user.handleClose}>
                    <Typography textAlign="center">{setting.label}</Typography>
                  </MenuItem>
                </Link>
              ))}

              {isLog() ? (
                <MenuItem
                  onClick={() => {
                    user.handleClose();
                    Logout();
                  }}
                >
                  <Typography textAlign="center">Salir</Typography>
                </MenuItem>
              ) : null}
            </Menu>
          </Box>

          <Box
            sx={{
              paddingRight: { md: "1%", lg: "15%" },
              display: { xs: "none", md: "flex" },
            }}
          >
            <LinkButton page="Sucursales" label="Sucursales" />
            <LinkButton page="Menu" label="Menu" bordered />
          </Box>

          <Box
            sx={{
              paddingRight: { md: 0, lg: "5%" },
              display: { xs: "none", md: "flex" },
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <Link to="/" style={{ textDecoration: "none" }}>
                <Image
                  src={logoCD}
                  fit="cover"
                  duration={0}
                  height={70}
                  width={150}
                />
              </Link>
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <LinkButton page="Reservacion" label="Reservaciones" bordered />
            <LinkButton page="Ayuda" label="Ayuda" />
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "none", lg: "flex" },
            }}
          >
            <Button onClick={toggleBusqueda}>
              <Search
                sx={{
                  color: "#644838",
                  fontFamily: "Outfit",
                  fontSize: 50,
                  m: 0,
                }}
              />
            </Button>

            <Button onClick={toggleCarrito}>
              <ShoppingCartOutlined
                sx={{
                  color: "#644838",
                  fontFamily: "Outfit",
                  fontSize: 50,
                  m: 0,
                }}
              />
            </Button>
          </Box>

          {/* */}

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", lg: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu2-appbar"
              aria-haspopup="true"
              onClick={nav.handleOpen}
              sx={{ color: "#644838" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu2-appbar"
              anchorEl={nav.anchor}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(nav.anchor)}
              onClose={nav.handleClose}
              sx={{
                display: { xs: "none", md: "block", lg: "none" },
              }}
            >
              {pages2.map((page) => (
                <MenuItem key={`/${page}`} onClick={nav.handleClose}>
                  {page === "Buscar" && (
                    <Button onClick={toggleBusqueda}>
                      <Search
                        sx={{
                          color: "#644838",
                          fontFamily: "Outfit",
                          fontSize: 50,
                          m: 1,
                        }}
                      />
                    </Button>
                  )}

                  {page === "Carrito" && (
                    <Button onClick={toggleCarrito}>
                      <ShoppingCartOutlined
                        sx={{
                          color: "#644838",
                          fontFamily: "Outfit",
                          fontSize: 50,
                          m: 1,
                        }}
                      />
                    </Button>
                  )}

                  {page != "Buscar" && page != "Carrito" && (
                    <Link to={`/${page}`} style={{ textDecoration: "none" }}>
                      <Typography textAlign="center">{page}</Typography>
                    </Link>
                  )}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
