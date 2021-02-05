import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from "../icons/Burger-menu";
import EmployeeListIcon from "../icons/Employee-list";
import BluetoothIcon from "../icons/Bluetooth-picto";
import LocationIcon from "../icons/Location";
import CalendarIcon from "../icons/Calendar"


// CSS API : Styles given to this component. 

const useStyles = makeStyles((theme) => ({ 
  // style of the root element 
  root: {
    boxShadow : "none"
  },
  // primary color of the Appbar . By default it has blue color. Here it is made transperent.
  colorPrimary:{
    backgroundColor: "transparent"
  }
}));

export default function ButtonAppBar() {
  // useStyles() is the react hook used to give the classnames to react components.
  const classes = useStyles();
  // The common Appbar components with props and its child components
  return (
    <div >
      <AppBar className={`${classes.colorPrimary} ${classes.root}`} position="static">
        <Toolbar style={{justifyContent : "space-between"}}>
          <div style={{width : "6%" ,display : "flex" , justifyContent : "space-between" , alignItems:"center"}}>
            <EmployeeListIcon />
            <CalendarIcon />
          </div>
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
