import Input from "./Input";
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
