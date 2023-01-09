import React from 'react';
import './Main.css';
import background from '../../background.png';
import Animal from '../Animal/Animal.js';
import { animals } from '../../data.js';

export default function Main() {
  console.log(animals);
  return (
    <main style={{ background: `url("${background}")` }}>
      <Animal props={animals[1]} />
    </main>
  );
}
