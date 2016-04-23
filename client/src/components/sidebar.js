// Core
import React, {Component, PropTypes} from 'react'

// Modules
import surveyModel from 'models/survey'

export default class Sidebar extends Component {

  constructor (props) {
    super(props)
    this.state = {
      surveys: []
    }
  }

  componentDidMount (props) {
    const {carerId} = this.props
    this._onLoad(carerId)
  }

  _onLoad = (carerId) => {
    surveyModel
      .list(carerId)
      .then(this._onLoadResult)
  }

  _onLoadResult = (result) => {
    const {surveys} = this.state
    this.setState({surveys: surveys.concat(result)})
  }

  render () {
    const {state: {surveys}} = this
    return (
      <div className='sidebar'>
        <p>i am a sidebar <i className="icon-search"></i></p>
      </div>
    )
  }
}

Sidebar.propTypes = {
  carerId: PropTypes.number
}
