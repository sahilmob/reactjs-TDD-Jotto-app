import { applyMiddleware, createStore } from "redux"

import rootReducer from "./reduces"
import thunk from "redux-thunk";

export const middlewares = [thunk]

export default createStore(rootReducer, applyMiddleware(...middlewares))
