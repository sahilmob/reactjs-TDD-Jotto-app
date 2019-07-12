import PropTypes from "prop-types"
import React from 'react'

export default function GuessedWords (props) {
  const { guessedWords } = props

  return (
    <div data-test="component-guessed-words">
      {guessedWords.length ?
        <div data-test="guessed-words">
          <h3>Guessed Words</h3>
          <table>
            <thead>
              <tr><th>Guess</th><th>Marching Letters</th></tr>
            </thead>
            <tbody>
              {guessedWords.map((word, i) => <tr key={i} data-test="guessed-word"><td>{word.guessedWord}</td><td>{word.letterMatchCount}</td></tr>)}
            </tbody>
          </table>
        </div> :
        <span data-test="guess-instructions">Try to guess the secret word!</span>
      }
    </div>
  )
}
GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
}