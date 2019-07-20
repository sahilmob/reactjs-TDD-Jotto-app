import { combineReducers } from "redux";
import guessedWords from "./guessedWordsReducer"
import secretWord from "./secretWordReducer"
import success from "./successReducer";

export default combineReducers({
  success,
  guessedWords,
  secretWord
});