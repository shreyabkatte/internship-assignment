import { FormLabel } from "@material-ui/core";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from "../../components/List";
import GrapesgrowthIcon from "../../icons/Grapes-growth";
import OverallDiameterIcon from "../../icons/Overall-diameter-picto";
import IconWithLabel from "../../components/IconWithLabel";
import LeafDensityIcon from "../../icons/Leaf-density-picto";
import DiseasesIcon from "../../icons/Diseases";
import AnomaliesTrackingIcon from "../../icons/Anomalies-tracking-picto";
import SunPictoIcon from "../../icons/Sun-picto";
import VineyardActiviesIcon from "../../icons/Vineyard-activities";
import AreaInformation from "./AreaInformation";
import Grid from "@material-ui/core/Grid";
import SortIcon from "../../icons/Sort-picto";
import CloseWindowIcon from "../../icons/close-window";
import "../style.css"


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: -10
  },
  item: {
    width: "50%"
  }
}));

// Navigation items 
const listItems = [
  { title: "Evolution de la baie", icon: <GrapesgrowthIcon /> },
  { title: "Densité foliaire", icon: <LeafDensityIcon /> },
  { title: "Maladies", icon: <DiseasesIcon /> },
  { title: "Suivi des anomalies", icon: <AnomaliesTrackingIcon /> },
  { title: "Historique météo", icon: <SunPictoIcon /> },
  { title: "Activités viticoles", icon: <VineyardActiviesIcon /> }]

const Resultant1 = () => {

  const classes = useStyles();
  return (
    <div style={{ display: "flex" }}>
      {/* Navigation items */}
      {/* Change 3 : On 1st item of list click chnages */}
      <List items={listItems} />

      <div className="inner-div" style={{ width: "60%" }}>
        <div style={{ width: "50%" }}>
          <div style={{ display: "flex", alignItems : "center" ,marginBottom :50}}>
            <IconWithLabel primaryText="Trier" icon={<SortIcon width={25} height={25} />} />
            <div className = "icon-with-label" >
              <IconWithLabel primaryText="Côte Sud" labelColor="#000000" icon={<CloseWindowIcon width={10} height={10} fill={"#000000"} />} position="right" />
            </div>
            <div className = "icon-with-label" >
              <IconWithLabel primaryText="23/08/2020" labelColor="#000000" icon={<CloseWindowIcon width={10} height={10} fill={"#000000"} />} position="right" />
            </div>
          </div>

          <FormLabel style={{ fontSize: 16}}>23/08/2020</FormLabel>
          <Grid className={classes.root} container spacing={10}>
            <Grid item className={classes.item}>
              <FormLabel style={{ fontSize: 14, paddingBottom: 20 }}>Braucol</FormLabel>
            </Grid>
            <Grid item className={classes.item}>
              <FormLabel style={{ fontSize: 14, paddingBottom: 20 }}>17:45</FormLabel>
            </Grid>
          </Grid>
          <Grid className={classes.root} container spacing={8}>
            <Grid item className={classes.item}>
              <IconWithLabel primaryText="Nombre de grappes" secondaryText="12 398" icon={<GrapesgrowthIcon width={25} height={25} />} />
            </Grid>
            <Grid item className={classes.item}>
              <IconWithLabel primaryText="Diamètre moyen (en mm)" secondaryText="12.2" icon={<OverallDiameterIcon />} />
            </Grid>
          </Grid>
        </div>

        {/* Information of different areas */}
        <AreaInformation />
      </div>
    </div>





  )
}

export default Resultant1