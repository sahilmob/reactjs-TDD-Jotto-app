import { actionTypes } from "../actions"

/**
 * @function secretWordReducer
 * @param {string} state - State before reducer
 * @param {object} action - Action sent to reducer.
 * @returns {string} - New state (secret word).
 */
export default (state = null, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_SECRET_WORD:
      return payload
    default: return state
  }
}