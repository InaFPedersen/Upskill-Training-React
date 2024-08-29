'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>
        {count}
      </button>
    </div>
  );
}
