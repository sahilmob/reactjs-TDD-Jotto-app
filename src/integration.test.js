import { guessWord } from "./actions"
import { storeFactory } from "../test/testUtils"

describe("guessWord action creator", () => {
  const secretWord = 'party'
  const unsuccessfulGuess = 'train'
  describe("no guessed words", () => {
    let store;
    const initialState = { secretWord }
    beforeEach(() => {
      store = storeFactory(initialState)
    })
    it("should update the state correctly for unsuccessful guess", () => {
      store.dispatch(guessWord(unsuccessfulGuess))
      const newState = store.getState()
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [{
          guessedWord: unsuccessfulGuess,
          letterMatchCount: 3
        }]
      }
      expect(newState).toEqual(expectedState)
    })
    it("should update the state correctly for successful guess", () => {
      store.dispatch(guessWord(secretWord))
      const newState = store.getState()
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [{
          guessedWord: secretWord,
          letterMatchCount: secretWord.length
        }],
      }
      expect(newState).toEqual(expectedState)
    })
  })
  describe("guessed words", () => {
    const guessedWords = [{
      guessedWord: "agile",
      letterMatchCount: 1
    }]
    const initialState = {
      guessedWords,
      success: false,
      secretWord
    }
    let store
    beforeEach(() => {
      store = storeFactory(initialState);
    })
    it("should update the state correctly for unsuccessful guess", () => {
      store.dispatch(guessWord(unsuccessfulGuess))
      const newState = store.getState()
      const expectedState = {
        ...initialState,
        guessedWords: [
          ...guessedWords,
          {
            guessedWord: unsuccessfulGuess,
            letterMatchCount: 3
          }
        ]
      }
      expect(newState).toEqual(expectedState)
    })
    it("should update the state correctly for successful guess", () => {
      store.dispatch(guessWord(secretWord))
      const newState = store.getState()
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [
          ...guessedWords,
          {
            guessedWord: secretWord,
            letterMatchCount: 5
          }
        ]
      }
      expect(newState).toEqual(expectedState)
    })
  })
})
