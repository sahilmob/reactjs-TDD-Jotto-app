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
  const wrapper = shallow(<Input store={store} />).dive().dive()
}



describe("render", () => {
  describe('word has not been guessed', () => {
    it("should renders without errors", () => {

    })
    it("should renders input box", () => {

    })
    it("should renders submit button", () => {

    })

    describe("word has been guessed", () => {
      it("should renders without errors", () => {

      })
      it("should not renders input box", () => {

      })
      it("should not renders submit button", () => {

      })


    })
  })
})
