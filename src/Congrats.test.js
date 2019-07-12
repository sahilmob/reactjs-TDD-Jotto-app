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

})
it("should renders no text when `success prop is false`", () => {

})
it("renders non-empty congrats message when `success` message is true", () => {

})