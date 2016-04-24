// Core
import React, {Component, PropTypes} from 'react'

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
      filter: '',
      surveys: [],
      selectedSurvey: undefined
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

  _onFilter = (value) => {
    this.setState({filter: value})
  }

  _onSelectSurvey = (survey) => {
    this.setState({selectedSurvey: survey})
  }

  _getFilteredSurveys = () => {
    const {surveys, filter} = this.state
    return surveys.filter((item) => {
      const patient = item.patient.name.toLowerCase()
      return patient.includes(filter.toLowerCase())
    })
  }

  render () {
    const {selectedSurvey} = this.state
    const surveys = this._getFilteredSurveys()
    return (
      <div className='sidebar'>
        <h1 className='logo'>{PROJECT_NAME}</h1>
        <div className='sidebar-tools'>
          <Filter onFilter={this._onFilter} />
          <button className='button-add'>
            <i className='icon-plus' />
          </button>
        </div>
        <List surveys={surveys} selectedSurvey={selectedSurvey} onSelectSurvey={this._onSelectSurvey} />
      </div>
    )
  }
}

Sidebar.propTypes = {
  carerId: PropTypes.number
}
