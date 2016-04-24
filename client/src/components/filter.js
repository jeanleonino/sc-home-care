// Core
import React, {Component, PropTypes} from 'react'

export default class Filter extends Component {

  render () {
    return (
      <div className='filter'>
        <input className='filter-input' placeholder='Procurar paciente' type='text' />
        <i className='filter-icon icon-search' />
      </div>
    )
  }
}

Filter.propTypes = {
  onFilter: PropTypes.func
}
