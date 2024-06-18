import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Button from './ui/Button';
import Input from './ui/Input';

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: aliceblue;
`;

const StyledApp = styled.div`
  background-color: #ccc;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>The Wild Oasis</H1>
        <Button onClick={() => alert('Checking in...')}>Check in</Button>
        <Button onClick={() => alert('Checking out...')}>Check out</Button>

        <Input type="number" placeholder="Number of guests" />
      </StyledApp>
    </>
  );
}

export default App;
