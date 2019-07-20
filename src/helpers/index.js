/**
 * @method getLetterMatchCount 
 * @param {string} guessedWord - Guessed word. 
 * @param {string} secretWord - Secret word.
 * @returns {number} - Number of letters matched between guessed word and secret word
 */
export function getLetterMatchCount (guessedWord, secretWord) {
  const secretLettersSet = new Set(secretWord.split(""))
  const guessedLettersSet = new Set(guessedWord.split(""))
  return [...secretLettersSet].filter((letter) => guessedLettersSet.has(letter)
  ).length
}