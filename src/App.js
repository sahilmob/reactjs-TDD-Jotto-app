import './App.css';

import Congrats from "./Congrats"
import GuessedWords from "./GuessedWords"
import Input from "./Input";
import React from 'react';
import { connect } from "react-redux"
import { getSecretWord } from "./actions"

class App extends React.Component {
  render () {
    const { success, guessedWords } = this.props
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={success} />
        <Input />
        <GuessedWords guessedWords={guessedWords} />
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    success: state.success,
    secretWord: state.secretWord,
    guessedWords: state.guessedWords
  }
}

export default connect(mapStateToProps, { getSecretWord })(App);
