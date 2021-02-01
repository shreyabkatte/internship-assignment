import React from "react";


const SvgIcon = ({icon , style , onClick}) =>{
    return (
        <div>
            <img src={icon}  style={style} /> 
        </div>
    )
}

export default SvgIcon