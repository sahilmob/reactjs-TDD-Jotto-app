import Enzyme, { shallow } from "enzyme"

import Congrats from "./Congrats";
import EnzymeAdapter from "enzyme-adapter-react-16";
import React from "react";
import { findByAttr } from "../test/testUtils"

Enzyme.configure({ adapter: new EnzymeAdapter() })


/**
 * Factory function to create a ShallowWrapper for the congrats component.
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper} 
 */
const setup = (props = {}) => {
  return shallow(<Congrats {...props} />)
}
it("should renders without error", () => {
  const wrapper = setup()
  const component = findByAttr(wrapper, "component-congrats")
  expect(component.length).toBe(1)
})
it("should renders no text when `success prop is false`", () => {
  const wrapper = setup({ success: false })
  const component = findByAttr(wrapper, "component-congrats")
  expect(component.text()).toBe("")
})
it("renders non-empty congrats message when `success` message is true", () => {

  const wrapper = setup({ success: true })
  const message = findByAttr(wrapper, "congrats-message")
  expect(message.text().length)
})