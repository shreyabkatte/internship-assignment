import { FormLabel } from "@material-ui/core";
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
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


/***  Author: Shreya BALACHANDRA ***/
/***  Resultant Screen ***/
/***  route : /results  ***/


/*** Input components : GrapesgrowthIcon, IconWithLabel, LeafDensityIcon, DiseasesIcon
                        AnomaliesTrackingIcon, SunPictoIcon, VineyardActiviesIcon, DevinesIcon, Grid, SortIcon, CloseWindowIcon ***/
/*** Output : Resultant Screen ***/

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: -10
  },
  item: {
    width: "50%"
  }
}));

// Navigation items passed to the list component
const listItems = [
  { title: "Evolution de la baie", icon: <GrapesgrowthIcon /> },
  { title: "Densité foliaire", icon: <LeafDensityIcon /> },
  { title: "Maladies", icon: <DiseasesIcon /> },
  { title: "Suivi des anomalies", icon: <AnomaliesTrackingIcon /> },
  { title: "Historique météo", icon: <SunPictoIcon /> },
  { title: "Activités viticoles", icon: <VineyardActiviesIcon /> }]
  
class Resultant1 extends Component  {
  state = {
   view1:true,
   view2:true
  };
render(){
  const { classes } = this.props;
  return (
    <div style={{ display: "flex" }}>

      {/* List displayed on the left section of the screen. List component take the array of items to be displayed in 'items' props   */}
      <List items={listItems} />

      <div className="inner-div" style={{ width: "60%" }}>
        <div style={{ width: "50%" }}>
          <div style={{ display: "flex", alignItems : "center" ,marginBottom :50}}>
            <IconWithLabel primaryText="Trier" icon={<SortIcon width={25} height={25} />} />
            {this.state.view1&&
            <div className = "icon-with-label"  onClick={() => this.setState({ view1: false })}>
              <IconWithLabel primaryText="Côte Sud" labelColor="#000000" icon={<CloseWindowIcon width={10} height={10} fill={"#000000"} />} position="right" />
            </div>}
            { this.state.view2&&
            <div className = "icon-with-label"  onClick={() => this.setState({ view2: false })}>
              <IconWithLabel  primaryText="23/08/2020" labelColor="#000000" icon={<CloseWindowIcon width={10} height={10} fill={"#000000"} />} position="right" />
            </div>}
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

        {/* A constant component for displaying all the informationsabout a particular region */}
        <AreaInformation />
      </div>
    </div>





  )
}
}

export default withStyles(useStyles, { withTheme: true }) (Resultant1)
