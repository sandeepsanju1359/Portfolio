import React from 'react';
import "./ProjectsBox.css"

function ProjectsBox({ title, sentences, subtitle, images, link }) {
    return (
        <div className="pro_box_container">
        <p className="pro_box_title">{title}</p>
        <div className="pro_box_sentences">
          {sentences.map((value, key) => (
            <p>{value}</p>
          ))}
        </div>
        <p className='pro_box_link'> <span>Link : </span><a href={link} target="_blank">
                   {link}
                </a>           
        </p>
        <p className="pro_box_subtitle">{subtitle}</p>
        <div className="pro_box_images">
          {images.map((value, key) => (
            <img src={value} />
          ))}
        </div>
      </div>
    );
}

export default ProjectsBox;