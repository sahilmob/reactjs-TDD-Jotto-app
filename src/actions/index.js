import { getLetterMatchCount } from "../helpers"

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD'

};

/**
 * @function guessWord
 * @param {string} guessedWord - Guessed word.
 * @returns {function} - Redux thunk function.
 */
export const guessWord = (guessedWord) => {
  return (dispatch, getState) => {
    const secretWord = getState().secretWord
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord)
    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: { guessedWord, letterMatchCount }
    })

    if (guessedWord === secretWord) {
      dispatch({ type: actionTypes.CORRECT_GUESS })
    }
  }
}