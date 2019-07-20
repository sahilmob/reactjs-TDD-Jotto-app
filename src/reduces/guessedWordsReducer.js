import { actionTypes } from "../actions"

/**
 * @function guessedWordsReducer - Guessed words reducer.
 * @param {array} state - Array of guessed words.
 * @param {object} action - Action to be reduced.
 * @returns {array} - New guessedWords state. 
 */
export default (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.GUESS_WORD:
      return [
        ...state,
        payload
      ]
    default:
      return state
  }
}