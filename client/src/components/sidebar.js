// Core
import React, {Component, PropTypes} from 'react'

// Modules
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
    const {state: {surveys}} = this
    return (
      <div className='sidebar'>
        <h1 className="logo">{PROJECT_NAME}</h1>
        <div className="sidebar-tools">
          <div className="filter">
            <input className="filter-input" placeholder="Pesquisar formulários" type="text" />
            <i className="filter-icon icon-search" />
          </div>
        </div>
      </div>
    )
  }
}

Sidebar.propTypes = {
  carerId: PropTypes.number
}
