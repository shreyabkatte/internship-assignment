import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Resultant1 from "../screens/Results/Resultant1";
import ResultWheel from "../screens/Results/ResultWheel"
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import RefreshIcon from "../icons/Refresh";
import FormLabel from "@material-ui/core/FormLabel";
import Calendar from "../screens/Calendar/index";
import MapWrapper from "../screens/Maps/Map"

/*** Author : Shreya BALACHANDRA ***/
/*** This component is a constant reusable component to display Tabs component. The props are-
Pending for customizing. Props shpuld be sent from Parent element ***/


const useStyles = makeStyles({
  root: {
    // flexGrow: 1,
    fontSize: "18px",
    textTransform: "none"
  },
  textColorPrimary: {
    color: "#ffffff"
  },
  selected: {
    color: "#ffffff"
  }
});

export default function LabTabs() {
  const classes = useStyles();

  // react hook for stateChange. HandleChange event is used to update the state.
  const [value, setValue] = React.useState('1');

  // onClick event of the tab
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const pathName = window.location.pathname

  return (
    <TabContext value={value} >
      {/* <AppBar position="static"> */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* List of tabs to be displayed */}
        <TabList onChange={handleChange} aria-label="simple tabs example">
          <Tab className={classes.root} label="Répartition des tâches" value="1" />
          <Tab className={classes.root} label="Suivre l’activité" value="2" />
          <Tab className={classes.root} label="Résultats" value="3" />
        </TabList>
      </div>
      <div style={{margin : "50px 30px 30px 30px" ,    width: "28%" ,display :"flex"}}>
        <FormLabel style={{fontSize : 18}}>Voici un résumé de l’activité en cours dans votre exploitation. Actualisé le 23/08/2020 à 15h00.
                    </FormLabel>
        <RefreshIcon />
      </div>
      {/* <Tabpanel is displayed on each tab. Value is used to map from <Tab /> to <TabPanel />*/}
      {/* Calendar content */}
      <TabPanel value="1"><Calendar /></TabPanel>
      {/* Map Content */}
      <TabPanel value="2"><MapWrapper /></TabPanel>
      {/* Results content */}
      {pathName == "/result-page-wheel" ? <TabPanel value="3"><ResultWheel /></TabPanel> : <TabPanel value="3"><Resultant1 /></TabPanel>}
    </TabContext>
  );
}
