import { actionTypes } from "../actions";

/**
 * @function successReducer
 * @param {array} state - Array of guessed words.
 * @param {object} action - action to be reduced.
 * @returns {boolean} - new success state.
 */
export default (state = false, { type, payload }) => {
  switch (type) {
    case actionTypes.CORRECT_GUESS:
      return true;
    default:
      return state
  }
}
