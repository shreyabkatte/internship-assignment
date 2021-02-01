import React from "react";
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import IconWithLabel from "../../components/IconWithLabel";
import Grid from "@material-ui/core/Grid";
import FormLabel  from "@material-ui/core/FormLabel";
import GrapesgrowthIcon from "../../icons/Grapes-growth";
import OverallDiameterIcon from "../../icons/Overall-diameter-picto";


const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: 100
    },
    container : {
        marginBottom:30
    }
  }));

const information = [
    {
      title: "Parcelle 1",
      time: "15:32",
      quantityObject: {
        icon: <GrapesgrowthIcon width={25} height={25} />,
        discription: "Nombre de grappes",
        quantity: "12 398"
      },
      area: {
        icon: <OverallDiameterIcon />,
        discription: "Diamètre moyen (en mm)",
        quantity: "12.2"
      }
    },
    {
      title: "Braucol",
      time: "12:09",
      quantityObject: {
        icon: <GrapesgrowthIcon width={25} height={25} />,
        discription: "Nombre de grappes",
        quantity: "12 398"
      },
      area: {
        icon: <OverallDiameterIcon />,
        discription: "Diamètre moyen (en mm)",
        quantity: "12.2"
      }
    },
    {
        title: "Braucol",
        time: "10:17",
        quantityObject: {
          icon: <GrapesgrowthIcon width={25} height={25} />,
          discription: "Nombre de grappes",
          quantity: "12 398"
        },
        area: {
          icon: <OverallDiameterIcon />,
          discription: "Diamètre moyen (en mm)",
          quantity: "12.2"
        }
      },
      {
        title: "Braucol",
        time: "17:45",
        quantityObject: {
          icon: <GrapesgrowthIcon width={25} height={25} />,
          discription: "Nombre de grappes",
          quantity: "12 398"
        },
        area: {
          icon: <OverallDiameterIcon />,
          discription: "Diamètre moyen (en mm)",
          quantity: "12.2"
        }
      }
  ]


const AreaInformation = () =>{
const classes = useStyles();

    return (
        <List className={classes.root}>
          {information.map((item, index) => {
            return (
              <ListItem button className={classes.container}>
                <Grid container >
                  <Grid item sm={2}>
                    <FormLabel style={{fontSize:14 ,color:"#D3D3D3"}}>{item.title}</FormLabel>
                  </Grid>
                  <Grid item sm={2}>
                    <FormLabel style={{fontSize:14 ,color:"#D3D3D3"}}>{item.time}</FormLabel>
                  </Grid>
                  <Grid item sm={3}>
                    <IconWithLabel primaryText={item.quantityObject.discription} secondaryText={item.quantityObject.quantity} icon={item.quantityObject.icon} />
                  </Grid>
                  <Grid item sm={3}>
                  <IconWithLabel primaryText={item.area.discription} secondaryText={item.area.quantity} icon={item.area.icon} />
                  </Grid> 
                </Grid>
              </ListItem>
            )
          })}
        </List>
    )
}

export default AreaInformation

