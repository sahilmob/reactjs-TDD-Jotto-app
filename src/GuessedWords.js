import PropTypes from "prop-types"
import React from 'react'

export default function GuessedWords (prop) {
  return (
    <div>

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