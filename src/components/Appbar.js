import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from "../icons/Burger-menu";
import EmployeeListIcon from "../icons/Employee-list";
import BluetoothIcon from "../icons/Bluetooth-picto";
import LocationIcon from "../icons/Location";
import CalendarIcon from "../icons/Calendar"

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow : "none"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  colorPrimary:{
    backgroundColor: "transparent"
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div >
      <AppBar className={`${classes.colorPrimary} ${classes.root}`} position="static">
        <Toolbar style={{justifyContent : "space-between"}}>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <div style={{width : "6%" ,display : "flex" , justifyContent : "space-between" , alignItems:"center"}}>
            <EmployeeListIcon />
            <CalendarIcon />
          </div>

          {/* <Typography variant="h6" className={classes.title}>
            News
          </Typography> */}
          {/* <Button color="inherit">Login</Button> */}
          <div style={{float : "right" ,width : "10%" ,display : "flex" , justifyContent : "space-between" , alignItems:"center"}}>
            <LocationIcon />
            <BluetoothIcon />
            <MenuIcon />
          </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}
