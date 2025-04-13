import React from 'react';
import './About.css';
import profileImage from '../assets/akash_profile-image.jpg'; // Add your profile image

const About: React.FC = () => {
  return (
    <main>
      <section className="about-header">
        <div className="container">
          <div className="section-title">
            <h1>About Me</h1>
          </div>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img src={profileImage} alt="Akash Kumar Yadav" />
            </div>
            <div className="about-text">
              <h2>Hi, I'm Akash Kumar Yadav</h2>
              <p>
                I'm a results-driven Computer Science professional with dual expertise in software 
                development and data analytics. Currently pursuing my Master's in Computer Science 
                at Fordham University, I'm passionate about creating efficient solutions to complex problems.
              </p>
              <p>
                With experience at Aditya Birla Capital, I've designed and implemented middleware 
                solutions that reduced data processing costs by 25% and improved system resilience by 30%.
              </p>
              <p>
                My technical skills include Java, Python, C++, SQL, data analysis, and cloud technologies. 
                I'm constantly learning and expanding my knowledge to stay at the forefront of technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="experience">
        <div className="container">
          <div className="section-title">
            <h2>Professional Experience</h2>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Data Analytics Intern</h3>
                <h4>Fordham University</h4>
                <p className="timeline-date">10/2024 - Present</p>
                <ul>
                  <li>Perform data cleaning, exploratory data analysis, and visualization using SQL, Python, Tableau, and Power BI</li>
                  <li>Automated 5+ manual workflows using Python scripts, saving 20+ hours monthly</li>
                  <li>Developing an Education Analytics Dashboard using Power BI for institutional decision-making</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Research Assistant - EDM Lab</h3>
                <h4>Fordham University</h4>
                <p className="timeline-date">07/2024 - Present</p>
                <ul>
                  <li>Developed deep learning models for bias detection in synthetic images using TensorFlow and PyTorch</li>
                  <li>Leveraged AWS SageMaker for model training acceleration and performance optimization</li>
                  <li>Created and curated datasets for AI model training and validation</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Software Developer</h3>
                <h4>Aditya Birla Capital</h4>
                <p className="timeline-date">07/2023 - 07/2024</p>
                <ul>
                  <li>Designed and implemented middleware solutions that reduced data processing costs by 25%</li>
                  <li>Developed and integrated microservices and REST APIs using Python, improving system resilience by 30%</li>
                  <li>Implemented OAuth 2.0 security protocols for financial data protection</li>
                  <li>Received Certificate of Appreciation for contributions to the Customer 1:N journey</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Graduate Engineer Trainee</h3>
                <h4>Aditya Birla Capital</h4>
                <p className="timeline-date">01/2022 - 07/2023</p>
                <ul>
                  <li>Developed REST APIs for financial data integration and system connectivity</li>
                  <li>Designed and implemented data pipelines for financial reporting systems</li>
                  <li>Received recognition from Udaan Momentus for outstanding performance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="education">
        <div className="container">
          <div className="section-title">
            <h2>Education</h2>
          </div>
          <div className="education-grid">
            <div className="education-card">
              <div className="education-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>Master's in Computer Science</h3>
              <h4>Fordham University</h4>
              <p>Expected 2026</p>
              <p>GPA: 4.0 | GSAS Centennial Scholarship Recipient</p>
              <p>Relevant Coursework: Software Engineering, Data Mining, Cloud Computing, NoSQL, Data Visualization</p>
            </div>
            <div className="education-card">
              <div className="education-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>B.Tech in Computer Science & Engineering</h3>
              <h4>Vellore Institute of Technology</h4>
              <p>2022</p>
              <p>CGPA: 3.456 | COMPEX Scholarship Recipient</p>
              <p>Relevant Coursework: DBMS, AI, Machine Learning, Data Structures, NLP, Image Processing</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
