import Accordion from './component/Accordion';
import { faqs } from './faqs';

function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

export default App;
