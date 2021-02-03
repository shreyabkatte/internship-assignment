import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import NavigateIcon from "../icons/navigate";
import CroisIcon from "../icons/Croix-supprimer"
import BoxWifiIcon from "../icons/Box-WiFi";
import RécepteurEffacéIcon from "../icons/Récepteur-éffacé";
import PetitLinkIcon from "../icons/Petit-link-incomplete";
import DistanceIcon from "../icons/distance"
import { useHistory } from "react-router-dom";
import './style.css';

const Connection = () => {
    const history = useHistory();
    return (
        <div className="app-header">
            <div className="app-bar" style={{ display: "flex" }}>
            <div onClick={() => history.goBack()}> 
                        <NavigateIcon width="30px" height="30px" />
                        </div>
                <CroisIcon width="25px" height="25px" />
            </div>
            <div style={{ width: "100%", textAlign: "center", margin: "50px 0px 130px 0px" }}><FormLabel style={{ fontSize: "22px" }}>CONFIGURATION</FormLabel>
            </div>
            <div style={{ padding: "0px 40px", width: "40%", textAlign: "center", margin: "0px 0px 40px 20px" }}>
                <div style={{ textAlign: "center", display: "inline-grid" }}>
                    <FormLabel style={{ fontSize: "22px" }}>Max. 10 m</FormLabel>
                    <DistanceIcon />
                </div>
            </div>


            <div style={{ display: "flex", justifyContent: 'space-between', padding: "0px 40px" }}>
                <div style={{ display: "flex", width: "40%" }}>
                    <BoxWifiIcon width="200px" height="200px" />
                    <div style={{ display: "flex", alignItems: "center", margin: "0px 40px" }}><PetitLinkIcon /></div>
                    <div style={{ textAlign: "center" }}>
                        <FormLabel style={{ color: "gray", fontWeight: 900 }}>e24**</FormLabel>
                        <RécepteurEffacéIcon width="200px" height="200px" />
                    </div>

                </div>


                <FormLabel style={{ display: "flex", alignItems: "center", width: "40%", lineHeight: "inherit", fontSize: "22px" }}>
                    À présent, activez la fonction Bluetooth de votre
                    smartphone et selectionnez le canal de votre
                    appareil
                </FormLabel>
            </div>

            <div style={{ width: "40%", float: "right", textAlign: "center", display: "flex", justifyContent: "center", marginTop: 40, paddingRight: "40px" }}>
                <div style={{
                    border: "solid white", width: "50%", padding: "16px", borderRadius: "30px",
                    textAlign: "center"
                }}>
                    <FormLabel>Suivant</FormLabel>
                </div>

            </div>



        </div>

    )
}


export default Connection
