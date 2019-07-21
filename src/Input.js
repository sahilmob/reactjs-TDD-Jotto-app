import React, { Component } from 'react'

import { connect } from "react-redux"
import { guessWord } from "./actions"

class Input extends Component {
  render () {
    const { success } = this.props;

    return (
      <div data-test="component-input">
        {success ? null
          : <>
            <form className="form-inline">
              <input type="text" data-test="input-box" className="mb-2 mx-sm-3" id="word-guess" placeholder="Enter guess" />
              <button data-test="submit-button" className="btn btn-primary" type="submit">Submit</button>
            </form>
          </>}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    success: state.success
  }
}

export default connect(mapStateToProps, { guessWord })(Input)