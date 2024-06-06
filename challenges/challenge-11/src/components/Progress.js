import { useQuiz } from '../contexts/QuizContext';

function Progress() {
  const { index, numberOfQuestions, points, maxPossiblePoints, answer } =
    useQuiz();

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
        <strong>{points}</strong> / {maxPossiblePoints} points
      </p>
    </header>
  );
}

export default Progress;
