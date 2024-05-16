const Skill = ({ skill, color, level }) => {
  console.log();
  return (
    <div
      className="skill"
      style={{ backgroundColor: color, fontWeight: 'bold' }}
    >
      <p className="skill-text">
        {skill}{' '}
        <span>
          {level === 'beginner' && '👶'}
          {level === 'intermediate' && '👌'}
          {level === 'advanced' && '💪'}
        </span>
      </p>
    </div>
  );
};

export default Skill;
