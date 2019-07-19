const initialState = {
  success: false
}

/**
 * @function successReducer
 * @param {array} state - Array of guessed words.
 * @param {object} action - action to be reduced.
 * @returns {boolean} - new success state.
 */
export default (state = initialState, { type, payload }) => {
  return state
}
