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
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const pathName = window.location.pathname

  return (
    <TabContext value={value} >
      {/* <AppBar position="static"> */}
      <div style={{ display: "flex", justifyContent: "center" }}>
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

      {/* <TabPanel value="1">Item One</TabPanel>
      <TabPanel value="2">Item Two</TabPanel> */}
      {/* <TabPanel value="3"><Resultant1 /></TabPanel> */}

      <TabPanel value="1"><Calendar /></TabPanel>
      <TabPanel value="2"><MapWrapper /></TabPanel>
      {pathName == "/result-page-wheel" ? <TabPanel value="3"><ResultWheel /></TabPanel> : <TabPanel value="3"><Resultant1 /></TabPanel>}

      {/* <TabPanel value="3"><Resultant1 /></TabPanel> */}
    </TabContext>
  );
}
