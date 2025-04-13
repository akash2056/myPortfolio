import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

// Import your project images
import thyroidProjectImage from '../assets/thyroid-project.jpg';
import rentalDashboardImage from '../assets/rental-dashboard.jpg';
import seniorcareImage from '../assets/seniorcare.jpg';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Thyroid Disease Classification System',
      description: 'Developed a deep learning model to detect and classify thyroid diseases from ultrasound images. Achieved 92% accuracy using convolutional neural networks and transfer learning techniques.',
      technologies: ['Python', 'TensorFlow', 'CNN', 'Transfer Learning'],
      imageUrl: thyroidProjectImage, // Use a placeholder if you don't have the actual image
      demoUrl: 'https://example.com/thyroid-demo',
      codeUrl: 'https://github.com/akash2056/Thyroid-Disease-Classification-System'
    },
    {
      title: 'US Rental Market Analytics Dashboard',
      description: 'Created interactive Tableau dashboard analyzing rental market trends across major US cities. Implemented predictive models to forecast rental price fluctuations based on economic indicators.',
      technologies: ['Tableau', 'Python', 'Data Analysis', 'Predictive Modeling'],
      imageUrl: rentalDashboardImage, // Use a placeholder if you don't have the actual image
      demoUrl: 'https://public.tableau.com/app/profile/akash.kumar.yadav/vizzes',
      codeUrl: 'https://github.com/akash2056/US_Rental_Market_Analysis'
    },
    {
      title: 'SeniorCare Companion Platform',
      description: 'Developing an AI-driven health management solution for elderly care. Implementing HIPAA-compliant data handling and predictive health monitoring features.',
      technologies: ['React', 'Node.js', 'Machine Learning', 'HIPAA'],
      imageUrl: seniorcareImage, // Use a placeholder if you don't have the actual image
      codeUrl: 'https://github.com/akash2056/SeniorCare_Companion'
    }
  ];

  return (
    <main>
      <section className="projects-header">
        <div className="container">
          <div className="section-title">
            <h1>My Projects</h1>
            <p>Here are some of the projects I've worked on that showcase my skills and expertise.</p>
          </div>
        </div>
      </section>

      <section className="projects-grid">
        <div className="container">
          <div className="projects-container">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                imageUrl={project.imageUrl}
                demoUrl={project.demoUrl}
                codeUrl={project.codeUrl}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
