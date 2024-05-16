import { skills } from '../skills.js';
import Skill from './Skill';

const SkillList = () => {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill
          skill={skill.skill}
          color={skill.color}
          level={skill.level}
          key={skill.skill}
        />
      ))}
    </div>
  );
};

export default SkillList;
