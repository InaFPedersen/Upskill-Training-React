const Skill = (props) => {
  return (
    <div
      className="skill"
      style={{ backgroundColor: props.background, fontWeight: 'bold' }}
    >
      <p className="skill-text">
        {props.name} <span>{props.emoji}</span>
      </p>
    </div>
  );
};

export default Skill;
