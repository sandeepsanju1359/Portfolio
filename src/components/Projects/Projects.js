import React from "react";
import "./Projects.css";
import ProjectsBox from "./ProjectsBox/ProjectsBox";
import react from "../../images/techStack/react.png";
import js from "../../images/techStack/javascr.png";
import html from "../../images/techStack/html.png";
import css from "../../images/techStack/css.png";
import python from "../../images/techStack/python.png";

function Projects() {
    const ProjectsData = [
        {
            title: "MoviTuube",
            sentences: [
                "It is a ReactJs-based Project which allows us to browse movies like Netflix.",
                "Used API calling for the movie database.",
                "Used CSS to make the UI look user-friendly.",
            ],
            
            subtitle: "Tech Used",
            images: [react, js, html,css],
            link:"https://github.com/sandeepsanju1359/MovieTube",
        },
        {
            title: "Car Rental System",
            sentences: [
                "It is an HTML-based Project which allows us to search for cars and rent them for desired time.",
                "Used CSS to make the UI look user-friendly.",
            ],
            subtitle: "Tech Used",
            images: [html,css],
            link:"https://github.com/sandeepsanju1359/CarRentalSystem",
        },
        {
            title: "Quiz Application",
            sentences: [
                "It is a Python-based Project which takes the user name and displays the questions and at last displays the score.",
            ],
            subtitle: "Tech Used",
            images: [python],
            link:"https://github.com/sandeepsanju1359/QuizzApp",
        },
    ];

    return (
        <div className="pro_container">
            <p className="pro_title">Projects</p>
            <div className="pro_projectsbox_container">
                {ProjectsData.map((value, key) => (
                    <ProjectsBox
                        title={value.title}
                        sentences={value.sentences}
                        subtitle={value.subtitle}
                        images={value.images}
                        link = {value.link}
                    />
                ))}
            </div>
        </div>
    );
}

export default Projects;