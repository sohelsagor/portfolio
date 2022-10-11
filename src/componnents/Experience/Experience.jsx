import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./Experience.css";
export const Experience = () => {
  return (
    <section id="experience">
      
      <h5 id="section-content">What Skills I Have</h5>
      <h2>My Experience</h2>
      
      <div className="container experience-container">
        <div className="experience-fontend">
          <h3>Fontend Development</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsPatchCheckFill className="experience-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-icon" />
              <div>
                <h4>Boostrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-icon" />
              <div>
                {" "}
                <h4>Tailwind</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-icon" />
              <div>
                <h4>Angular</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience-backend">
          <h3>Backend Development</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsPatchCheckFill className="experience-icon" />
              <div>
                
                <h4>Node JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
