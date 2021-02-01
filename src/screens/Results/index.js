import React from "react";
import AppBar from "../../components/Appbar";
import Tabs from "../../components/Tabs";
import "../style.css"

class ResultComponent extends React.Component {
    render() {
        return (
            <div className="results-container">
                <AppBar />
                <Tabs />
                {/* <div>
                    <FormLabel>Voici un résumé de l’activité en cours dans votre exploitation.Actualisé le 23/08/2020 à 15h00.
                    </FormLabel>
                    <RefreshIcon />
                </div> */}

            </div>)
    }

}

export default ResultComponent