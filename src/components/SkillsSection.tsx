import React from 'react';
import './SkillsSection.css';

interface Skill {
  name: string;
  level: number;
  icon?: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface SkillsSectionProps {
  categories: SkillCategory[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ categories }) => {
  return (
    <div className="skills-section">
      <div className="section-title">
        <h2>My Skills</h2>
      </div>
      <div className="skills-container">
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="skill-category">
            <h3>{category.name}</h3>
            {category.skills.map((skill, skillIndex) => (
              <div key={skillIndex} className="skill">
                <div className="skill-info">
                  <div className="skill-icon">
                    {skill.icon && <i className={skill.icon}></i>}
                    <span>{skill.name}</span>
                  </div>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar-container">
                  <div className="skill-bar" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsSection;
