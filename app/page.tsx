"use client";
import { useState, useEffect } from 'react';
import MegaSenaLogo from '../components/MegaSenaLogo';
import RandomNumber from '../components/RandomNumber';

const Sorteio = () => {
  // Defina o tipo do estado como número[]
  const [sortedNumbers, setSortedNumbers] = useState<number[]>([]);

  useEffect(() => {
    const generateNumbers = () => {
      let numbers: number[] = []; // Defina o tipo como número[]
      while (numbers.length < 6) {
        const number = Math.floor(Math.random() * 61);
        if (!numbers.includes(number)) {
          numbers.push(number);
        }
      }
      return numbers;
    };

    const numbers = generateNumbers();
    setSortedNumbers(numbers); // O estado agora espera um número[]
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
