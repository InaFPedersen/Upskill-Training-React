import Skill from './Skill';

const SkillList = () => {
  return (
    <div className="skill-list">
      <Skill name="HTML" background="#0000ff" emoji="💪" />
      <Skill name="CSS" background="#b700ff" emoji="👐" />
      <Skill name="JavaScript" background="#1eff00" emoji="🤟" />
      <Skill name="TypeScript" background="#ff00f2" emoji="🤏" />
      <Skill name="C#" background="#ff0000" emoji="👌" />
      <Skill name="React" background="#ffee00" emoji="🤞" />
      <Skill name="Vue" background="#ff5e00" emoji="👍" />
      <Skill name="Angular" background="#307a1d" emoji="🖐" />
      <Skill name="UX design" background="#00b7ff" emoji="🎨" />
    </div>
  );
};

export default SkillList;
