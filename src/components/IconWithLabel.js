import React from "react";
import FormLabel from "@material-ui/core/FormLabel";

/**** Author : Shreya BALACHANDRA ****/
/***** This component is a constant reusable component to display icon with label. The props are-
 primaryText : The main text to be displayed
 secondaryText : The secondary text if any else null
 labelColor : Customized color if any
 icon : icon to be displayed
 position : position of the icon
 verticalAlign  : The allignment of icon and label. If vertical send verticalAllignment={true} : flag for allignment
 
****/

const IconWithLabel = ({ primaryText, labelColor, secondaryText, icon, position = "left", verticalAlign = false }) => {
    return (verticalAlign ?
        (
            <div className="grid-display" >
                <div>
                    {icon}
                </div>

                <FormLabel style={{ marginTop: 20, color: "#D3D3D3" }}>{primaryText}</FormLabel>
            </div>)
        :
        (<div style={{ display: "flex" }}>
            {position == "left" ? icon : ""}
            <div style={{ marginLeft: position == "left" ? 10 : 0, marginRight: position == "right" ? 10 : 0, display: "grid" }}>
                <FormLabel style={{color: labelColor ? labelColor : "#D3D3D3" }}>{primaryText}</FormLabel>
                <FormLabel style={{ fontWeight: 900 }}>{secondaryText}</FormLabel>
            </div>
            {position == "right" ? icon : ""}
        </div>)
    )
}

export default IconWithLabel