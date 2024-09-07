import { useState, useEffect } from 'react';
import MegaSenaLogo from '../components/MegaSenaLogo';
import RandomNumber from '../components/RandomNumber';

const Sorteio = () => {
  const [sortedNumbers, setSortedNumbers] = useState([]);

  useEffect(() => {
    const generateNumbers = () => {
      let numbers = [];
      while (numbers.length < 6) {
        const number = Math.floor(Math.random() * 61);
        if (!numbers.includes(number)) {
          numbers.push(number);
        }
      }
      return numbers;
    };

    const numbers = generateNumbers();
    setSortedNumbers(numbers);
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <MegaSenaLogo />
      <h1>Números Sorteados:</h1>
      <div style={{ fontSize: '24px', marginBottom: '20px' }}>
        {sortedNumbers.join(' - ')}
      </div>
      <RandomNumber />
    </div>
  );
};

export default Sorteio;