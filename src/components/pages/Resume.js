import React from "react";

const Resume = () => (
  <div>
    <h1>Resume</h1>
    <div className="col-2 center">
      <p>Download my 
        <a download href={(`../../assets/resume/resume.pdf`)}> Resume</a>
      </p>
      <div className="skill-container">
        <div className="skill-wrap">
          <h4>Front End Proficiencies</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Responsive Design</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className="skill-wrap">
          <h4>Back End Proficiencies</h4>
          <ul>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL / Sequalize</li>
            <li>MondoDB / Mongoose</li>
            <li>REST</li>
          </ul>
        </div>
        <div className="skill-wrap">
          <h4>Design Software Proficiencies</h4>
          <ul>
            <li>CorelDRAW (Vector Editing)</li>
            <li>Adobe Photoshop (Raster Editing)</li>
            <li>DaVinci Resolve Studio (Video Editing)</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Resume;
