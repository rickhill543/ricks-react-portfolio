import React, { useState } from 'react';


const ProjectsList = () => {
  // const [currentPhoto, setCurrentPhoto] = useState();

  const [projects] = useState([
    {
      name: 'Killer Reads',
      description: 'Fullstack',
      github: 'https://github.com/einalem4/killer-reads',
      deploy: 'https://killer-reads.herokuapp.com/',
      image: 0,
    },
    {
      name: 'The Sign-Dept',
      description: 'WordPress',
      github: '#',
      deploy: 'https://sign-dept.com',
      image: 1,
    },
    {
      name: 'DnD Character Generator',
      description: 'HTML | CSS | JS',
      github: 'https://github.com/einalem4/character-generator',
      deploy: 'https://einalem4.github.io/character-generator/',
      image: 2,
    },
    {
      name: 'Run Buddy',
      description: 'HTML | CSS',
      github: 'https://github.com/rickhill543/run-buddy',
      deploy: 'https://rickhill543.github.io/run-buddy/',
      image: 3,
    },
    {
      name: 'Horiseon Marketing Solutions',
      description: 'HTML | CSS',
      github: 'https://github.com/rickhill543/horiseon-marketing-services',
      deploy: 'https://rickhill543.github.io/horiseon-marketing-services/',
      image: 4,
    },
    {
      name: 'JavaScript Carousel',
      description: 'Future Project',
      github: 'https://github.com/rickhill543',
      deploy: 'https://github.com/rickhill543',
      image: 5,
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, i) => (
          <div className="project-container" key={project.name}>
            <div className="info-container">
              <a href={project.deploy}> 
                <h2>{project.name} </h2>
              </a>
              <a href={project.github}> 
                <i className="fa fa-github" aria-hidden="true" key={"asdfas"}></i>
              </a>
              <h3>{project.description} </h3>
            </div>
            <img
              src={(`../../assets/projects/${i}.jpg`)}
              alt={project.name}
              className="img-thumbnail mx-1"
              key={project.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
