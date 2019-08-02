import App from "./App"
import React from "react"
import { storeFactory } from "../test/testUtils"

const setup = (initialState = {}) => {
  const store = storeFactory(initialState)
  return shallow(<App store={store} />).dive().dive()
}


describe("redux props", () => {
  it("should  have access to success piece of state", () => {
    const success = true
    const wrapper = setup({ success })
    const successProp = wrapper.instance().props.success
    expect(successProp).toBe(success)
  })
  it("should have access to the `secretWord state`", () => {
    const secretWord = "party"
    const wrapper = setup({ secretWord })
    const secretWordProp = wrapper.instance().props.secretWord
    expect(secretWordProp).toBe(secretWord)
  })
  it("should have access to `guessedWord state`", () => {
    const guessedWords = [{ guessedWord: 'train', letterMatchCount: 3 }]
    const wrapper = setup({ guessedWords })
    const guessedWordsProp = wrapper.instance().props.guessedWords
    expect(guessedWordsProp).toEqual(guessedWords);
  })
  it("should have access to getSecretWord action creator", () => {
    const wrapper = setup();
    const getSecretWordProp = wrapper.instance().props.getSecretWord
    expect(getSecretWordProp).toBeInstanceOf(Function)
  })
})