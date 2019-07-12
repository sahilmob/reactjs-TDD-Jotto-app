import './App.css';

import GuessedWords from "./GuessedWords"
import React from 'react';

function App () {
  return (
    <div className="App">
      <GuessedWords guessedWords={[{ guessedWord: "aaa", letterMatchCount: 5 }]} />
    </div>
  );
}

export default App;
