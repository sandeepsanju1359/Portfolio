import React from "react";
import "./Experience.css";
import ExperienceBox from "./ExperienceBox/ExperienceBox";
// import react from "../../images/techStack/react.png";
// import js from "../../images/techStack/javascr.png";
// import html from "../../images/techStack/html.png";

function Experience() {
  const experienceData = [
    {
      title: "Career Ninjas",
      sentences: [
        "Worked as a Sales Intern at CareerNinjas from March, 2022 to May, 2022 ",
        "It is an Edtech platform that offer free upskilling to college students",
        "Contacted various institutions and promoted the training programs and verified the data provided",
      ],
    //   subtitle: "Tech Used",
    //   images: [react, js, html],
    },
    {
        title: "Cognizance IIT Roorkee",
        sentences: [
          "Worked as a Campus Ambassdor at Cognizance IIT Roorkee from February, 2020 to March, 2020 ",
          "It is is an agglomeration of over 180 events that encompass every wavelength of an entire technical spectrum",
          "Shared The posters of the events through social media platforms",
        ],
    //   subtitle: "Tech Used",
    //   images: [react, js, html],
    },
    // {
    //     title: "Career Ninjas",
    //     sentences: [
    //       "Worked as a Sales Intern at CareerNinjas from March, 2022 to May, 2022 ",
    //       "It is an Edtech platform that offer free upskilling to college students",
    //       "Contacted various institutions and promoted the training programs and verified the data provided",
    //     ],
    // //   subtitle: "Tech Used",
    // //   images: [react, js, html],
    // },
  ];

  return (
    <div className="ex_container">
      <p className="ex_title">Experience</p>
      <div className="ex_experiencebox_container">
        {experienceData.map((value, key) => (
          <ExperienceBox
            title={value.title}
            sentences={value.sentences}
            // subtitle={value.subtitle}
            // images={value.images}
          />
        ))}
      </div>
    </div>
  );
}

export default Experience;