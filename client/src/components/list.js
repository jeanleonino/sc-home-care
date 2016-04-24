// Core
import React, {Component, PropTypes} from 'react'
import Ps from 'perfect-scrollbar'

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

  _renderItems () {
    const {surveys} = this.props
    return surveys.map((item, key) => {
      return (
        <li className='list-item' key={key}>{item.patient.name}</li>
      )
    })
  }
}

List.propTypes = {
  surveys: PropTypes.arrayOf(PropTypes.instanceOf(SurveyEntity))
}
