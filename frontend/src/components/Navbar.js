import * as React from "react";
import Box from "@mui/material/Box";
//import BottomNavigation from "@mui/material/BottomNavigation";
//import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import {
  AccountCircle,
  Search,
  ShoppingCartOutlined,
} from "@mui/icons-material";
//import { bgcolor, borderRadius, fontSize } from "@mui/system";
import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar({ toggleBusqueda, toggleCarrito }) {
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
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
        bgcolor: "#de6d71 ",
      }}
    >
      <Box
        sx={{
          width: "12%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link to="/">
          <AccountCircle
            sx={{ color: "#644838", fontFamily: "Outfit", fontSize: 50, m: 1 }}
          />
        </Link>
      </Box>

      <Box
        sx={{
          width: "12%",
          display: "flex",
          justifyContent: "center",
        }}
      >
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
      </Box>

      <Box
        sx={{
          width: "12%",
          display: "flex",
          justifyContent: "center",
        }}
      >
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

      <Box
        sx={{
          width: "24%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography
            sx={{
              color: "#FFFFFF",
              fontFamily: "Outfit",
              fontSize: 30,
              m: 1,

              fontWeight: "bold",
              borderBottom: 2,
            }}
          >
            Cream Dream
          </Typography>
        </Link>
      </Box>

      <Box
        sx={{
          width: "12%",
          display: "flex",
          justifyContent: "center",
        }}
      >
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
      </Box>

      <Box
        sx={{
          width: "12%",
          display: "flex",
          justifyContent: "center",
        }}
      >
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

      <Box
        sx={{
          width: "8%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button onClick={toggleBusqueda}>
          <Search
            sx={{ color: "#644838", fontFamily: "Outfit", fontSize: 50, m: 1 }}
          />
        </Button>
      </Box>

      <Box
        sx={{
          width: "8%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button onClick={toggleCarrito}>
          <ShoppingCartOutlined
            sx={{ color: "#644838", fontFamily: "Outfit", fontSize: 50, m: 1 }}
          />
        </Button>
      </Box>
    </Box>
  );
}
