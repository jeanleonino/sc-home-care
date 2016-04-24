// Core
import React, {Component, PropTypes} from 'react'
import Ps from 'perfect-scrollbar'
import classNames from 'classnames'

// Modules
import SurveyEntity from 'entities/survey'

export default class List extends Component {

  componentDidMount () {
    const list = document.getElementsByClassName('list')[0]
    Ps.initialize(list)
  }

  render () {
    return (
      <ul className='list'>
        {this._renderItems()}
      </ul>
    )
  }

  _onClick = (item) => {
    return () => {
      const {onSelectSurvey} = this.props
      onSelectSurvey(item)
    }
  }

  _renderItems () {
    const {surveys, selectedSurvey} = this.props
    return surveys.map((item, key) => {
      const className = classNames('list-item', {
        '-active': selectedSurvey && selectedSurvey.id === item.id
      })
      return (
        <li className={className} key={key} onClick={this._onClick(item)}>{item.patient.name}</li>
      )
    })
  }
}

List.propTypes = {
  surveys: PropTypes.arrayOf(PropTypes.instanceOf(SurveyEntity)),
  selectedSurvey: PropTypes.instanceOf(SurveyEntity),
  onSelectSurvey: PropTypes.func
}
