import React from 'react';
import ProjectCard from '../components/ProjectCard';
import '../styles.css';

const Experience = () => {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      imageUrl: 'path/to/project1-image.jpg',
      description: 'Description of Project 1...',
    },
    {
      id: 2,
      title: 'Project 2',
      imageUrl: 'path/to/project2-image.jpg',
      description: 'Description of Project 2...',
    },
    {
      id: 3,
      title: 'Project 3',
      imageUrl: 'path/to/project3-image.jpg',
      description: 'Description of Project 3...',
    },
    {
      id: 4,
      title: 'Project 4',
      imageUrl: 'path/to/project4-image.jpg',
      description: 'Description of Project 4...',
    },
  ];

  const handleSeeMore = (projectId) => {
    // Implement logic to open modal for the selected project
    console.log('See More clicked for project ID:', projectId);
  };

  return (
    <div id="experience" className="section">
      <div className="experience-container">
        <main className="experience-main">
          <div className="experience-content-wrapper">
            <h1 className="experience-text-title">Experience</h1>
            <div className="project-cards-container">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  imageUrl={project.imageUrl}
                  description={project.description}
                  onClick={() => handleSeeMore(project.id)}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Experience;
