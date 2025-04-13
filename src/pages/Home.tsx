import React from 'react';
import SkillsSection from '../components/SkillsSection';
import './Home.css';

const Home: React.FC = () => {
  const skillCategories = [
    {
      name: 'Programming Languages',
      skills: [
        { name: 'Java', level: 90, icon: 'fab fa-java' },
        { name: 'Python', level: 85, icon: 'fab fa-python' },
        { name: 'C++', level: 80, icon: 'fas fa-code' },
        { name: 'SQL', level: 85, icon: 'fas fa-database' }
      ]
    },
    {
      name: 'Web Technologies',
      skills: [
        { name: 'React', level: 80, icon: 'fab fa-react' },
        { name: 'TypeScript', level: 75, icon: 'fab fa-js' },
        { name: 'HTML/CSS', level: 85, icon: 'fab fa-html5' }
      ]
    },
    {
      name: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', level: 75, icon: 'fab fa-aws' },
        { name: 'Docker', level: 70, icon: 'fab fa-docker' },
        { name: 'Kubernetes', level: 65, icon: 'fas fa-dharmachakra' }
      ]
    }
  ];

  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Akash Kumar Yadav</h1>
            <h2>Software Developer & Data Analyst</h2>
            <p>
              Results-driven Computer Science professional with dual expertise in software 
              development and data analytics. Skilled in developing robust, scalable applications 
              while leveraging data science techniques to extract actionable insights.
            </p>
            <div className="hero-buttons">
              <a href="/projects" className="btn">View My Work</a>
              <a href="/contact" className="btn btn-outline">Contact Me</a>
            </div>
          </div>
        </div>
      </section>

      <section className="skills">
        <div className="container">
          <SkillsSection categories={skillCategories} />
        </div>
      </section>

      <section className="highlights">
        <div className="container">
          <div className="section-title">
            <h2>Professional Highlights</h2>
          </div>
          <div className="highlights-grid">
            <div className="highlight-card">
              <div className="highlight-icon">
                <i className="fas fa-code"></i>
              </div>
              <h3>Software Development</h3>
              <p>Developed and integrated microservices and REST APIs using Python, improving system resilience by 30%</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Data Analytics</h3>
              <p>Perform data cleaning, exploratory data analysis, and visualization using SQL, Python, Tableau, and Power BI</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">
                <i className="fas fa-cloud"></i>
              </div>
              <h3>Cloud Technologies</h3>
              <p>Experience with AWS services like EC2, S3, and SageMaker for model training acceleration</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
