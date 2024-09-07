import { useState } from 'react';

const RandomNumber = () => {
  const [number, setNumber] = useState(null);

  const generateNumber = () => {
    const randomNumber = Math.floor(Math.random() * 61);
    setNumber(randomNumber);
  };

  return (
    <div>
      <button onClick={generateNumber} style={{ marginBottom: '10px' }}>Gerar Número</button>
      {number !== null && <h2>Número Sorteado: {number}</h2>}
    </div>
  );
};

export default RandomNumber;