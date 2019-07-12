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

})
describe("if there are words guessed", () => {

})