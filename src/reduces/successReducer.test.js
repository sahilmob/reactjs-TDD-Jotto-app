import { actionTypes } from "../actions"
import success from "./successReducer"

describe("success reducer", () => {
  it("should return false as initial state", () => {
    const newState = success(undefined, {})
    expect(newState).toBe(false)
  })
  it("should returns true if action type is `CORRECT_GUESS`", () => {
    const newState = success(undefined, { type: actionTypes.CORRECT_GUESS })
    expect(newState).toBe(true)
  })
})