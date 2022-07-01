import React from "react";
import "./About.css"
import githubImage from "../../images/github_icon.png"
import linkedinImage from "../../images/linkedin_icon.png"


function About (){
    return(
        <div className="about_container">
            <p className="about_text1">
                <span className="highlighted_text">Hi, </span>
                 My Name is</p>
            <p className="about_text2">
                Polaki Sandeep</p>
            <p className="about_text3">I am a student at <span className="highlighted_text">LPU</span></p>
            <p className="about_text4">I am a student of B.Tech(CSE) pursuing my career in the field of Cyber Security. I want to expand and improve my
                knowledge and skills to get ready for the challenges in the IT sector. I wish to live up to my expectations and hone my
                skills which helps in the growth of the organization.</p>
            <div>
                <a href="https://www.linkedin.com/in/sandeeppolaki1359/" target="_blank">
                    <img src={linkedinImage} alt="LinkedinImage"/>
                </a>
                <a href="https://github.com/sandeepsanju1359" target="_blank">
                    <img src={githubImage} alt="GithubImage"/>
                </a>
            </div>
            <a href="mailto: polakisandeep2001@gmail.com">
                <button className="about_button">Get in Touch</button>
            </a>
            
        </div>
        
    )

}

export default About;