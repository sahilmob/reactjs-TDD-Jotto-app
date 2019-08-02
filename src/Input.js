import React, { Component } from 'react'

import { connect } from "react-redux"
import { guessWord } from "./actions"

export class UnconnectedInput extends Component {

  constructor (props) {
    super(props)
    this.inputBox = React.createRef()
  }

  submitGuessWordHandler = (e) => {
    e.preventDefault()
    const { guessWord } = this.props
    const guessedWord = this.inputBox.current.value
    if (guessedWord && guessedWord.length > 0) {
      guessWord(guessedWord)
      this.inputBox.current.value = ""
    }
  }

  render () {
    const { success } = this.props;

    return (
      <div data-test="component-input">
        {success ? null
          : <>
            <form className="form-inline">
              <input ref={this.inputBox} type="text" data-test="input-box" className="mb-2 mx-sm-3" id="word-guess" placeholder="Enter guess" />
              <button data-test="submit-button" className="btn btn-primary" type="submit" onClick={this.submitGuessWordHandler}>Submit</button>
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

export default connect(mapStateToProps, { guessWord })(UnconnectedInput)