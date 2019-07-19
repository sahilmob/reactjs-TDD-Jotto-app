import './App.css';

import Congrats from "./Congrats"
import GuessedWords from "./GuessedWords"
import React from 'react';

function App () {
  return (
    <div className="container">
      <h1>Jotto</h1>
      <Congrats success={false} />
      <GuessedWords guessedWords={[{ guessedWord: "aaa", letterMatchCount: 5 }]} />
    </div>
  );
}

export default App;
