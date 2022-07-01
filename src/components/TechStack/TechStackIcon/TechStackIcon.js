import React from "react";

function TechstackIcon({data}){
    return(
        <div className="techstack_image_element_container">
            <img src={data.iconImage} alt={data.iconAltProperty} />
            <p>{data.iconName}</p>
        </div>
    )
}

export default TechstackIcon;