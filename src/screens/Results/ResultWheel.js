import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import GrapesgrowthIcon from "../../icons/Grapes-growth";
import IconWithLabel from "../../components/IconWithLabel";
import LeafDensityIcon from "../../icons/Leaf-density-picto";
import DiseasesIcon from "../../icons/Diseases";
import AnomaliesTrackingIcon from "../../icons/Anomalies-tracking-picto";
import SunPictoIcon from "../../icons/Sun-picto";
import VineyardActiviesIcon from "../../icons/Vineyard-activities";
import DevinesIcon from "../../icons/Logo-devines";
import Grid from "@material-ui/core/Grid";
import "../style.css"

/***  Author: Shreya BALACHANDRA ***/
/***  Resultant wheel Screen ***/
/***  route : /result-page-wheel  ***/


/*** Input components : GrapesgrowthIcon, IconWithLabel, LeafDensityIcon, DiseasesIcon
                        AnomaliesTrackingIcon, SunPictoIcon, VineyardActiviesIcon, DevinesIcon, Grid ***/
/*** Output : Resultant wheel Screen ***/

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent : "center"
  },
  item: {
    display:"flex",
    justifyContent : "center"
  }
}));

const Resultant1 = () => {
  const classes = useStyles();
  return (   
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div >
        {/* First row icons : GrapesgrowthIcon and LeafDensityIcon display. Use IconwithLabel component to display the icons
        
        Props for IconWithLabel component are - 
        primaryText: Primary/Main text to display
        icon: icon to be displayed
        width and height for the icon
        verticalAlignment: Boolean (true if vertically alligned)
         */}
        <Grid container spacing={10} className={classes.root}>
          <Grid item className={classes.item} >
            <IconWithLabel primaryText="Evolution de la baie" icon={<GrapesgrowthIcon width="100px" height="100px" />} verticalAlign={true} />
          </Grid>
          <Grid item className={classes.item}>
            <IconWithLabel primaryText="Densité foliaire" icon={<LeafDensityIcon width="100px" height="100px" />} verticalAlign={true} />
          </Grid>
        </Grid>

        {/* Second row icons : VineyardActiviesIcon, DevinesIcon  and DiseasesIcon display. */}
        <Grid container spacing={8} className={classes.root}>
          <Grid item >
            <IconWithLabel primaryText="Activités viticoles" icon={<VineyardActiviesIcon width="100px" height="100px" />} verticalAlign={true} />
          </Grid>
          <Grid item>
            <DevinesIcon width="350px" height="350px" />
          </Grid>
          <Grid item >
            <IconWithLabel primaryText="Maladies" icon={<DiseasesIcon width="100px" height="100px" />} verticalAlign={true} />
          </Grid>
        </Grid>

        {/* Third row icons : AnomaliesTrackingIcon and SunPictoIcon  */}
        <Grid container spacing={8} className={classes.root}>
          <Grid item className={classes.item}>
            <IconWithLabel primaryText="Suivi des anomalies" icon={<AnomaliesTrackingIcon width="100px" height="100px" />} verticalAlign={true} />
          </Grid>
          <Grid item className={classes.item}>
            <IconWithLabel primaryText="Historique météo" icon={<SunPictoIcon width="100px" height="100px" />} verticalAlign={true} />
          </Grid>

        </Grid>
      </div>

    </div>
  )
}

export default Resultant1