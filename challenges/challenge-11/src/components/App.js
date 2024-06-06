import DateCounter from './DateCounter';
import Header from './Header';
import Main from './Main';
import Loader from './Loader';
import Error from './Error';
import Question from './Question';
import StartScreen from './StartScreen';
import NextButton from './NextButton';
import Progress from './Progress';
import FinishScreen from './FinishScreen';
import Timer from './Timer';
import Footer from './Footer';
import { useQuiz } from '../contexts/QuizContext';

function App() {
  const { status } = useQuiz();
  return (
    <div className="app">
      <Header />

      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && <StartScreen />}
        {status === 'active' && (
          <>
            <Progress />
            <Question />

            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}

        {status === 'finished' && <FinishScreen />}
      </Main>

      <aside>
        <DateCounter />
      </aside>
    </div>
  );
}

export default App;
