import { actionTypes, correctGuess } from "./"

describe("correctGuess", () => {
  it("should returns an action with `CORRECT_GUESS` action type", () => {
    const action = correctGuess()
    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS })

  })
})