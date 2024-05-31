function Progress({
  index,
  numberOfQuestions,
  points,
  maxPossiblePoints,
  answer,
}) {
  return (
    <header className="progress">
      <progress
        max={numberOfQuestions}
        value={index + Number(answer !== null)}
      />
      <p>
        Question <strong>{index + 1}</strong> / {numberOfQuestions}
      </p>
      <p>
        {points} / {maxPossiblePoints} points
      </p>
    </header>
  );
}

export default Progress;
