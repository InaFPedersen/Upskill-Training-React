import DateCounter from './components/DateCounter';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>

      <Main />

      <footer>
        <DateCounter />
      </footer>
    </div>
  );
}

export default App;
