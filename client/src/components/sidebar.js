// Core
import React, {Component, PropTypes} from 'react'
import debounce from 'debounce'

// Modules
import Filter from 'components/filter'
import List from 'components/list'
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

  _onFilter = (value) => {
    debounce((value) => {
      console.log(value)
    }, 500)
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
    const {surveys} = this.state
    return (
      <div className='sidebar'>
        <h1 className='logo'>{PROJECT_NAME}</h1>
        <div className='sidebar-tools'>
          <Filter onFilter={this._onFilter} />
          <button className='button-add'>
            <i className='icon-plus' />
          </button>
        </div>
        <List surveys={surveys} />
      </div>
    )
  }
}

Sidebar.propTypes = {
  carerId: PropTypes.number
}
