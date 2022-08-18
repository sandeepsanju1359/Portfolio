import React from "react";
import "./TechStack.css"
import react from "../../images/techStack/react.png"
import js from "../../images/techStack/javascr.png"
import html from "../../images/techStack/html.png"
import python from "../../images/techStack/python.png"
import cpp from "../../images/techStack/cpp.png"
import android from "../../images/techStack/android.png"
import css from "../../images/techStack/css.png"
import github from "../../images/techStack/github_icon.png"
import TechStackIcon from "./TechStackIcon/TechStackIcon"

function TechStack() {

    const techstackData = [
        {
            iconImage: react,
            iconAltProperty: "reactImage",
            iconName: 'React'
        },
        {
            iconImage: js,
            iconAltProperty: "jsImage",
            iconName: 'Javascript'
        },
        {
            iconImage: css,
            iconAltProperty: "cssImage",
            iconName: 'CSS'
        },
        {
            iconImage: html,
            iconAltProperty: "htmlImage",
            iconName: 'HTML'
        },
    ]

    const techstackData2 = [
        {
            iconImage: cpp,
            iconAltProperty: "cppImage",
            iconName: 'C++'
        },
        {
            iconImage: android,
            iconAltProperty: "androidImage",
            iconName: 'Android'
        },
        {
            iconImage: python,
            iconAltProperty: "pythonImage",
            iconName: 'Python'
        },
        {
            iconImage: github,
            iconAltProperty: "githubImage",
            iconName: 'Github'
        },
    ]

    // function showIcon(value){
    //     return(
    //         <div className="techstack_image_element_container">
    //             <img src={value.iconImage} alt={value.iconAltProperty} />
    //             <p>{value.iconName}</p>
    //         </div>
    //     )

    // }

  return (
    <div className="techstack_container">
      <p className="techstack_title">Tech Stack</p>
      <div className="techstack_image_rows_container">
          
        {/* Tech Stack Row 1 */}
        <div className="techstack_image_container_row1">

            {techstackData.map((value, key) => (
                // <div className="techstack_image_element_container">
                //     <img src={value.iconImage} alt={value.iconAltProperty} />
                //     <p>{value.iconName}</p>
                // </div>
                //showIcon(value)
                <TechStackIcon data={value} />
            ))}

        </div>

        {/* Tech Stack Row 2 (which is exactly same as Row 1 but have different icon name, image  and alt property) */}
        <div className="techstack_image_container_row1">

            {techstackData2.map((value, key) => (
                // <div className="techstack_image_element_container">
                //     <img src={value.iconImage} alt={value.iconAltProperty} />
                //     <p>{value.iconName}</p>
                // </div>
                <TechStackIcon data={value} />
            ))}

        </div>
      </div>
    </div>
  );
}


export default TechStack;





