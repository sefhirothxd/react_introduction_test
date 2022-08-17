import React, { useState } from 'react';

const Probando = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p data-testid="contador">{count}</p>
      <button
        data-testid="botton"
        onClick={() => setCount((count) => count + 2)}
      ></button>
    </div>
  );
};

export default Probando;
