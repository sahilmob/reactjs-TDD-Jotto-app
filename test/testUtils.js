/**
 * Return node(s) with the given data-test attr.
 * @param {ShallowWrapper} wrapper -  Enzyme shallow wrapper
 * @param {*} val - Value of data-test attr. for search.
 * @returns {ShallowWraper}
 */
export const findByAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${ val }']`)
}