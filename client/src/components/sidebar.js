// Core
import React, {Component, PropTypes} from 'react'

// Modules
import Filter from 'components/filter'
import surveyModel from 'models/survey'
import constants from 'repositories/constants'

const {PROJECT_NAME} = constants

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
    return (
      <div className='sidebar'>
        <h1 className='logo'>{PROJECT_NAME}</h1>
        <div className='sidebar-tools'>
          <Filter />
        </div>
      </div>
    )
  }
}

Sidebar.propTypes = {
  carerId: PropTypes.number
}
