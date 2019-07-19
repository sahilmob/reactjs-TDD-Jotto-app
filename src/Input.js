import React, { Component } from 'react'

import { connect } from "react-redux"

class Input extends Component {
  render () {
    return (
      <div>
        <button>Hii</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps)(Input)