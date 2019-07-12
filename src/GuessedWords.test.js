import { checkProps, findByAttr } from "../test/testUtils"

import GuessedWords from "./GuessedWords"
import React from "react";

const defaultProps = {
  guessedWords: [
    { guessedWord: "train", letterMatchCount: 3 }
  ]
}

/**
 * Factory function to create a ShallowWrapper for the GuessedWord component.
 * @function setup
 * @param {Object} props
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<GuessedWords {...setupProps} />)
}

it("shouldn't throw warning with expected props", () => {
  checkProps(GuessedWords, defaultProps)
})

describe("if there are no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] })
  })
  it("should renders without errors", () => {
    const component = findByAttr(wrapper, "component-guessed-words")
    expect(component.length).toBe(1)
  })
  it("should renders instructions to guess a word", () => {
    const component = findByAttr(wrapper, "guess-instructions")
    expect(component.text().length).not.toBe(0)

  })
})
describe("if there are words guessed", () => {
  let wrapper;
  let guessedWords;
  beforeEach(() => {
    guessedWords = [
      { guessedWord: "train", letterMatchCount: 3 },
      { guessedWord: "agile", letterMatchCount: 5 },
      { guessedWord: "rainbow", letterMatchCount: 8 },
    ]
    wrapper = setup({ guessedWords })
  })
  it("should renders without error", () => {
    const component = findByAttr(wrapper, "component-guessed-words")
    expect(component.length).toBe(1)
  })
  it("should renders guessed words list", () => {
    const component = findByAttr(wrapper, "guessed-words")
    expect(component.length).toBe(1)
  })
  it("should render the correct number of the guessed words", () => {
    const component = findByAttr(wrapper, "guessed-word")
    expect(component.length).toBe(guessedWords.length)
  })
})