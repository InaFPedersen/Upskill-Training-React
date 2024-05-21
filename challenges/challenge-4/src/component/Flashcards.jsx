import { useState } from 'react';
import { questions } from '../questions';

const Flashcards = () => {
  const [selectedId, setSelectedId] = useState(null);

  function selectedQuestion(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          onClick={() => selectedQuestion(question.id)}
          className={question.id === selectedId ? 'selected' : ''}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Flashcards;
