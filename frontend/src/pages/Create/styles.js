import { Button, Grid ,FormControl, TextField, FormLabel, Typography, InputAdornment, Select, MenuItem, Hidden} from "@mui/material"
import { withStyles, makeStyles} from "@mui/styles"

export const StyledTextField = withStyles((theme) => ({
    root: {
//letra
      "& .MuiInputBase-root": {
        color: '#644838',
        height: 60, 
        fontFamily: 'Outfit',
      },
//label focus
      '& label.Mui-focused': {
        color: '#644838',
        fontFamily: 'Outfit',
       
      },
      "& .MuiFormLabel-root": {
        color: '#644838',
        fontFamily: 'Outfit',
        fontSize: 20, 
        transform: 'translate(0px, -28px)',
      },
  //normal outline
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#644838',
          borderWidth: "2px",
          
        },
        '&:hover fieldset': {
          borderColor: '#de6d71',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#fa8466',
        },
      }, 
      
    }
  }))(TextField);

  export const useStyles = makeStyles((theme) => ({
    line:{

        borderBottomColor: '#644838',
        borderWidth: 0,
    borderRightWidth: 2,
        borderStyle: 'solid',
        height:"150vh"

 
    },
    section: {
        padding: "3%",
        cursor: "pointer",
        color: "#644838",
        "&:hover": {
         backgroundColor: "#FFEFB5"
         
        }
      },
      links:
      {
        
          color: "#644838",
          cursor: "pointer",
          "&:hover, &:focus, &:active, &:target": {
            color: "#FA8466",
            textDecoration: 'underline',
            cursor: "pointer"
          
          }
  
      }
     
  }));
