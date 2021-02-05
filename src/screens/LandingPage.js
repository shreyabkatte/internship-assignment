import React from "react";
import DevinesIcon from "../icons/Logo-devines";
import FormLabel from "@material-ui/core/FormLabel"
import { Link } from "react-router-dom";

/***  Author: Shreya BALACHANDRA ***/
/***  Landing Page ***/
/***  route : /  ***/


/*** Input components : DevinesIcon, FormLabel, Link ***/
/*** Output : Landing Page ***/
const LandingPage = () => {
    return (
        <div style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
            <div style={{ display: "grid", width: "20%" }}>
                {/*Devines icon with specific width and height */}
                <div>
                    <DevinesIcon width="300px" height="300px" />
                </div>
                {/*S'incrire button   */}
                <FormLabel style={{ fontSize : 18 , marginBottom: 80 }}>Bienvenue sur DeVines !</FormLabel>
                {/* Routing onclick of S'incrire. Link component is imported from 
                react-router library which take the path in "to" props */}
                <Link to="/configuration" style={{ textDecoration: 'none' }}>
                    <div style={{
                        border: "solid white", padding: "30px", borderRadius: "60px",
                        textAlign: "center", marginBottom: 30 , width :"100%"
                    }}>
                        <FormLabel style={{fontSize : 18}}>S'inscrire</FormLabel></div>
                </Link>
                {/* New registration section */}
                <div style={{
                    border: "solid white", padding: "30px", borderRadius: "60px",
                    textAlign: "center" ,width :"100%"
                }}>
                    <FormLabel style={{fontSize : 18}}>J'ai un compte</FormLabel></div>
            </div>
        </div>
    )
}

export default LandingPage