import axios from "axios"
import { getLetterMatchCount } from "../helpers"

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
  SET_SECRET_WORD: 'SET_SECRET_WORD'

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

export const getSecretWord = () => {
  return (dispatch, getState) => {
    return axios.get("http://localhost:3030").then(res => {
      dispatch({
        type: actionTypes.SET_SECRET_WORD,
        payload: res.data
      })
    });
  }
}