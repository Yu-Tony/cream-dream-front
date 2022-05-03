import * as React from "react";
import Box from "@mui/material/Box";
//import BottomNavigation from "@mui/material/BottomNavigation";
//import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import {
  AccountCircle,
  Search,
  ShoppingCartOutlined,
  StickyNote2Outlined,
  QrCode2Outlined
} from "@mui/icons-material";
//import { bgcolor, borderRadius, fontSize } from "@mui/system";
import { Container, Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

import { Image } from "mui-image";
import logoCD from "../pages/images/logoCD.png";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';


const pages = ['Sucursales', 'Menu', 'Reservacion', 'Ayuda', 'Buscar', 'Carrito'];
const pages2 = ['Buscar', 'Carrito'];
const settings = ['Perfil', 'Reportes', 'QR', 'Salir'];

export default function Navbar({ toggleBusqueda, toggleCarrito }) {
  

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  /*

  OTRA FORMA DE HACERLO,PERO NO ME CONVENCIO

  const [value, setValue] = React.useState(0);
  
  <BottomNavigation
  showLabels
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
  sx={{ bgcolor:'#de6d71'}}
>
  <BottomNavigationAction icon={<AccountCircle/>}  sx={{color:'#644838', fontFamily:'Outfit',}}/>
  <BottomNavigationAction label="Sucursales"  sx={{color:'#644838',fontFamily:'Outfit',fontWeight:'bold'}} />
  <BottomNavigationAction label="Menu" sx={{color:'#644838',fontFamily:'Outfit',fontWeight:'bold',border:2,borderRadius:16, m:1}} />

  <BottomNavigationAction label="Reservaciones" sx={{color:'#644838',fontFamily:'Outfit',fontWeight:'bold',border:2,borderRadius:16, paddingRight:3,paddingLeft:3,mt:1,mb:1  }}/>
  <BottomNavigationAction label="Ayuda" sx={{color:'#644838',fontFamily:'Outfit',fontWeight:'bold'}} />
</BottomNavigation>*/



return (
  <AppBar position="static"
    sx={{
      width: "100%",
      display: "flex",
      justifyContent: "flex-start",
      bgcolor: "#de6d71 ",
    }}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
     
    

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{color: "#644838"}}
              
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={`/${page}`} onClick={handleCloseNavMenu}>
                  
                  {page === 'Buscar' && 
                   <Button onClick={toggleBusqueda}>
                   <Search
                     sx={{ color: "#644838", fontFamily: "Outfit", fontSize: 50, m: 1 }}
                   />
                 </Button>}
                 
                 {page === 'Carrito' &&
                 
                  <Button onClick={toggleCarrito}>
                  <ShoppingCartOutlined
                    sx={{ color: "#644838", fontFamily: "Outfit", fontSize: 50, m: 1 }}
                  />
                </Button>}

                {page != 'Buscar' && page != 'Carrito' &&
                 <Link to={`/${page}`} style={{ textDecoration: "none" }}>
                 <Typography textAlign="center">{page}</Typography>
                 </Link>
                }
                 
                
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
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


          <Box sx={{ paddingRight: { md:0, lg: "5%"} }}>
            <Tooltip title="Opciones de Usuario">
              <AccountCircle onClick={handleOpenUserMenu} sx={{ color: "#644838", fontFamily: "Outfit", fontSize: 50, m: 1 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </AccountCircle>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                   <Link to={`/${setting}`} style={{ textDecoration: "none", padding: 0, margin: 0 }}>
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                 
                  <Typography textAlign="center">{setting}</Typography>
                  
                 
                </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

          <Box sx={{ paddingRight: { md: "1%", lg: "15%"}, display: { xs: 'none', md: 'flex' } }}>       

            <Link to="/Sucursales" style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  color: "#644838",
                  fontFamily: "Outfit",
                  fontSize: 30,
                  m: 1,
                  fontWeight: "bold",
                }}
              >
                Sucursales
              </Typography>
            </Link>

            <Link to="/Menu" style={{ textDecoration: "none" }}>
            <Box
              sx={{
                border: 2,
                borderColor: "#644838",
                borderRadius: 16,
                mt: 1,
              }}
            >
              <Typography
                sx={{
                  color: "#644838",
                  fontFamily: "Outfit",
                  fontSize: 30,
                  ml: 1,
                  mr: 1,
                  fontWeight: "bold",
                }}
              >
                Menu
              </Typography>
            </Box>
            </Link>

           
          </Box>

          <Box sx={{ paddingRight: {md: 0, lg: "5%"}, display: { xs: 'none', md: 'flex' } }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
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
       

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link to="/Reservacion" style={{ textDecoration: "none" }}>
              <Box
                sx={{ border: 2, borderColor: "#644838", borderRadius: 16, mt: 1 }}
              >
                <Typography
                  sx={{
                    color: "#644838",
                    fontFamily: "Outfit",
                    fontSize: 30,
                    ml: 1,
                    mr: 1,
                    fontWeight: "bold",
                  }}
                >
                  Reservaciones
                </Typography>
              </Box>
            </Link>

            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  color: "#644838",
                  fontFamily: "Outfit",
                  fontSize: 30,
                  m: 1,
                  fontWeight: "bold",
                }}
              >
                Ayuda
              </Typography>
            </Link>

           


          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md:'none', lg: 'flex' } }}>
        
            <Button onClick={toggleBusqueda}>
              <Search
                sx={{ color: "#644838", fontFamily: "Outfit", fontSize: 50, m: 1 }}
              />
            </Button>

            <Button onClick={toggleCarrito}>
              <ShoppingCartOutlined
                sx={{ color: "#644838", fontFamily: "Outfit", fontSize: 50, m: 1 }}
              />
            </Button>

           


          </Box>

    
{/* */}

<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', lg: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu2-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{color: "#644838"}}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu2-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'none', md: 'block', lg: 'none' },
              }}
            >
              {pages2.map((page) => (
                <MenuItem key={`/${page}`} onClick={handleCloseNavMenu}>
                  
                  {page === 'Buscar' && 
                   <Button onClick={toggleBusqueda}>
                   <Search
                     sx={{ color: "#644838", fontFamily: "Outfit", fontSize: 50, m: 1 }}
                   />
                 </Button>}
                 
                 {page === 'Carrito' &&
                 
                  <Button onClick={toggleCarrito}>
                  <ShoppingCartOutlined
                    sx={{ color: "#644838", fontFamily: "Outfit", fontSize: 50, m: 1 }}
                  />
                </Button>}

                {page != 'Buscar' && page != 'Carrito' &&
                 <Link to={`/${page}`} style={{ textDecoration: "none" }}>
                 <Typography textAlign="center">{page}</Typography>
                 </Link>
                }
                 
                
                </MenuItem>
              ))}
            </Menu>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>


  
);

}
