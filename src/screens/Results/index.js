import React from "react";
import AppBar from "../../components/Appbar";
import Tabs from "../../components/Tabs";
import "../style.css"


/***  Author: Shreya BALACHANDRA ***/
/***  Result Screen - This is the Parent component for Results screen. ***/
/***  route : /results  ***/


/*** Input components : AppBar, Tabs  ***/
/*** Output : Resultant Screen ***/

class ResultComponent extends React.Component {
    render() {
        return (
            
            <div className="results-container">
                {/* AppBar and Tabs components are imported and displayed. */}
                <AppBar />
                <Tabs />

            </div>)
    }

}

export default ResultComponent