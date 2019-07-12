import PropTypes from "prop-types"
import React from 'react'

export default function GuessedWords (props) {
  const { guessedWords } = props

  return (
    <div data-test="component-guessed-words">
      {guessedWords.length ? <span></span> : <span data-test="guess-instructions">Try to guess the secret word!</span>
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