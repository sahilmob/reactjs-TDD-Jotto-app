import { getLetterMatchCount } from "./"

describe("getLettersMatchCount", () => {
  const secretWord = 'party'
  it("should returns 0 when there are no matching letters", () => {
    const letterMatchCount = getLetterMatchCount("bones", secretWord)
    expect(letterMatchCount).toBe(0)
  })
  it("should return the correct number when there are 3 matching letters", () => {
    const letterMatchCount = getLetterMatchCount("train", secretWord)
    expect(letterMatchCount).toBe(3)
  })
  it("should return the correct number number when there are duplicate letters in the guess", () => {
    const letterMatchCount = getLetterMatchCount("parka", secretWord)
    expect(letterMatchCount).toBe(3)
  })
})
