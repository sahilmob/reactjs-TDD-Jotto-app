import { applyMiddleware, createStore } from "redux"

import checkPropsTypes from "check-prop-types";
import { middlewares } from "../src/configureStore"
import rootReducer from "../src/reduces"

/**
 * 
 * @param {Object} initialState - Initial state 
 * @function storeFactory
 * @returns {Store} - Redux store.
 */
export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState, applyMiddleware(...middlewares))
}

/**
 * Return node(s) with the given data-test attr.
 * @param {ShallowWrapper} wrapper -  Enzyme shallow wrapper
 * @param {*} val - Value of data-test attr. for search.
 * @returns {ShallowWrapper}
 */
export const findByAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${ val }']`)
}

export const checkProps = (component, conformingProps) => {
  const propError = checkPropsTypes(component.propTypes, conformingProps, "props", component.name)
  expect(propError).toBeUndefined()
}