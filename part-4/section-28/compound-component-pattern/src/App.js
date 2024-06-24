import Counter from './Counter';

export default function App() {
  return (
    <div>
      <h1>Compound Component Pattern</h1>
      {/* <Counter
        iconIncrease="+"
        iconDecrease="-"
        label="My NOT so flexible counter"
        hideLabel={false}
        hideIncrease={false}
        hideDecrease={false}
      /> */}
      <Counter>
        <Counter.Label>My super flexible counter</Counter.Label>
        <Counter.Decrease icon="-" />
        <Counter.Count />
        <Counter.Increase icon="+" />
      </Counter>
      <div>
        <Counter>
          <div style={{ marginBottom: '1.3rem' }}>
            <Counter.Label>My super flexible counter</Counter.Label>
          </div>

          <div>
            <span style={{ marginLeft: '3rem' }}></span>
            <Counter.Increase icon="⬆" />

            <div style={{ marginBottom: '1rem', marginTop: '1rem' }}>
              <Counter.Decrease icon="⬅" />
              <span style={{ marginLeft: '1.3rem' }}></span>
              <Counter.Count />
              <span style={{ marginLeft: '1.3rem' }}></span>
              <Counter.Increase icon="➡" />
            </div>
            <span style={{ marginLeft: '3rem' }}></span>
            <Counter.Decrease icon="⬇" />
          </div>
        </Counter>
      </div>
    </div>
  );
}
