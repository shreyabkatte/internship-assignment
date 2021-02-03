import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import NavigateIcon from "../icons/navigate"
import RécepteurConnectionWiFiIcon from "../icons/Récepteur-connection-wiFi"
import RécepteurEmbarquéIcon from "../icons/Récepteur-embarqué";
import OkIcon from "../icons/ok"
import DistanceIcon from "../icons/distance";
import CircleIcon from "../icons/Circle"
import Slider from '@material-ui/core/Slider';
import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";
import './style.css';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        // padding: theme.spacing(2),
    },

    imageIcon: {
        height: '100%'
    },
    iconRoot: {
        textAlign: 'center'
    }
}));

const style = {
    width: "30px",
    height: "30px"
}

const Register = () => {
    const [spacing, setSpacing] = React.useState(10);
    const classes = useStyles();
    const history = useHistory();

    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
    };

    return (
        <div className="app-header">
            <Grid container className={classes.root} >
                <div className="app-bar" style={{ display: "flex" }}>
                    {/* <SvgIcon children={<NavigateIcon width="30px" height="30px" />} htmlColor="red"/> */}
                    <div onClick={() => history.goBack()}> 
                        <NavigateIcon width="30px" height="30px" />
                        </div>
                   
                    <div style={{
                        border: "solid white", width: "20%", padding: "16px", borderRadius: "30px",
                        textAlign: "center"
                    }}>
                        <FormLabel>Passer l’installation</FormLabel></div>
                </div>


                <div style={{ width: "100%", textAlign: "center", margin: "30px 0px 60px 0px" }}><FormLabel>PAS À PAS</FormLabel>
                </div>

                <Grid item xs={12} >
                    <Grid container justify="center" alignItems="center" spacing={10}>
                        <Grid item style={{ margin: "60px", minWidth: "340px", textAlign: "center", paddingTop: "0px" }}>
                            <div style={{ minHeight: "250px", marginBottom: "40px" }}>
                                <RécepteurConnectionWiFiIcon width="200px" height="200px" />
                            </div>
                            <Link to="/connection" style={{ textDecoration: 'none' }}>
                                <div style={{
                                    border: "solid white", padding: "16px", borderRadius: "30px",
                                    textAlign: "center"
                                }}>
                                    <FormLabel>Configuration des appareils</FormLabel></div>
                            </Link>

                        </Grid>

                        <Grid item style={{ margin: "60px", minWidth: "340px", textAlign: "center", paddingTop: "30px" }}>
                            <div style={{ minHeight: "250px" }}>
                                <RécepteurEmbarquéIcon width="150px" height="150px" />
                            </div>

                            <div style={{
                                border: "solid white", padding: "16px", borderRadius: "30px",
                                textAlign: "center"
                            }}>
                                <FormLabel>Iinstallation du recepteur</FormLabel></div>
                            {/* Change 3 : Add circle icon  */}
                            <CircleIcon />
                        </Grid>

                        <Grid item style={{ margin: "60px", minWidth: "340px", textAlign: "center" }}>
                            <div style={{ minHeight: "250px" }}>
                                <div>
                                    <DistanceIcon width="60px" height="23px" />
                                    <OkIcon />
                                </div>
                                <div>
                                    <DistanceIcon width="60px" height="23px" />
                                    <OkIcon />
                                </div>
                                <div>
                                    <DistanceIcon width="60px" height="23px" />
                                    <OkIcon />
                                </div>
                            </div>

                            <div style={{
                                border: "solid white", padding: "16px", borderRadius: "30px",
                                textAlign: "center"
                            }}><FormLabel>Délimitation des parcelles</FormLabel></div>
                            {/* Change 3 : Add circle icon  */}
                            <CircleIcon />

                        </Grid>

                    </Grid>
                   
                </Grid>
                <Grid item xs={12} style={{height:"100px",marginTop:"-50px"}}>
                    <Grid container justify="center" alignItems="center" spacing={10}>
                       
                        <Grid item style={{ margin: "60px", minWidth: "340px", textAlign: "center", paddingTop: "0px" }}>
                      
                        <div style={{display:"flex", marginLeft:"100px",marginTop:"39px"}}>  
                        <CircleIcon fill={"white"} style={{fill:"white"}}/> 
                        <Slider   defaultValue={80} style={{color:"white"}}/>
                        </div>
                         
                        
                        </Grid>

                        <Grid item style={{ margin: "60px", minWidth: "340px", textAlign: "center", paddingTop: "30px" }}>
                        
                            <CircleIcon /> 
                        </Grid>

                        <Grid item style={{ margin: "60px", minWidth: "340px", textAlign: "center" }}>

                             <CircleIcon /> 

                        </Grid>

                    </Grid>
                   
                </Grid>
            </Grid>
        </div>
    );
}

export default Register;

