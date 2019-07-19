import './App.css';

import Congrats from "./Congrats"
import GuessedWords from "./GuessedWords"
import React from 'react';
import { connect } from "react-redux"

function App ({ success }) {
  return (
    <div className="container">
      <h1>Jotto</h1>
      <Congrats success={success} />
      <GuessedWords guessedWords={[{ guessedWord: "aaa", letterMatchCount: 5 }]} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    success: state.success.success
  }
}

export default connect(mapStateToProps)(App);
