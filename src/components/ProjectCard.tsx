import React from 'react';
import './ProjectCard.css';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  codeUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  technologies, 
  imageUrl,
  demoUrl,
  codeUrl
}) => {
  return (
    <div className="project-card">
      <div className="project-img">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <p className="project-description">{description}</p>
        <div className="tech-tags">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          {demoUrl && (
            <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="btn">
              Live Demo
            </a>
          )}
          {codeUrl && (
            <a href={codeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
