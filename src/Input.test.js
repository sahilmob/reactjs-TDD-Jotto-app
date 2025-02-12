import Input, { UnconnectedInput } from "./Input";
import React from "react";
import { findByAttr } from "../test/testUtils"
import { storeFactory } from "../test/testUtils"

/**
 * 
 * @param {object} initialState - Initial state for the setup
 * @returns {ShallowWrapper} 
 */
const setup = (initialState = {}) => {
  const store = storeFactory(initialState)
  return shallow(<Input store={store} />).dive().dive()
}



describe("render", () => {
  describe('word has not been guessed', () => {
    let wrapper
    beforeEach(() => {
      const initialState = { success: false }
      wrapper = setup(initialState)
    })

    it("should renders without errors", () => {
      const component = findByAttr(wrapper, "component-input")
      expect(component.length).toBe(1)
    })
    it("should renders input box", () => {
      const component = findByAttr(wrapper, "input-box")
      expect(component.length).toBe(1)
    })
    it("should renders submit button", () => {
      const component = findByAttr(wrapper, "submit-button")
      expect(component.length).toBe(1)
    })

    describe("word has been guessed", () => {
      let wrapper
      beforeEach(() => {
        const initialState = { success: true }
        wrapper = setup(initialState)
      })
      it("should renders without errors", () => {
        const component = findByAttr(wrapper, "component-input")
        expect(component.length).toBe(1)
      })
      it("should not renders input box", () => {
        const component = findByAttr(wrapper, "input-box")
        expect(component.length).toBe(0)
      })
      it("should not renders submit button", () => {
        const component = findByAttr(wrapper, "submit-button")
        expect(component.length).toBe(0)
      })
    })
  })
})

describe("redux props", () => {
  it("should have access to the success piece of state as a prop", () => {
    const success = true
    const wrapper = setup({ success })
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success)
  })
  it("should has access to the `guessWord` action creator as prop", () => {
    const wrapper = setup()
    const guessWordProp = wrapper.instance().props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function)
  })
})


describe("guessWord action creator", () => {
  let guessWordMock;
  let wrapper;
  const guessedWord = "train"
  beforeEach(() => {
    guessWordMock = jest.fn()
    wrapper = shallow(<UnconnectedInput success={false} guessWord={guessWordMock} />)
    wrapper.instance().inputBox.current = { value: guessedWord }
    const submitButton = findByAttr(wrapper, "submit-button")
    submitButton.simulate("click", { preventDefault () { } })
  })

  it("should call guessWord on Submit button clicked", () => {
    const guessWordCallCount = guessWordMock.mock.calls.length
    expect(guessWordCallCount).toBe(1)
  })
  it("should call `guessWord` action creator with input value as argument", () => {
    const guessWordArg = guessWordMock.mock.calls[0][0]
    expect(guessWordArg).toBe(guessedWord)
  })
  it("should clear the input box after guessWord is called", () => {
    const inputBoxValue = wrapper.instance().inputBox.current.value
    expect(inputBoxValue).toBe("")
  })
})
