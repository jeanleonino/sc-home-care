// Core
import React, {Component, PropTypes} from 'react'
import debounce from 'debounce'

export default class Filter extends Component {

  _onKeyUp = (e) => {
    const {onFilter} = this.props
    const value = e.target.value
    debounce(() => {
      onFilter(value)
    }, 700)()
  }

  render () {
    return (
      <div className='filter'>
        <input className='filter-input' placeholder='Procurar paciente' onKeyUp={this._onKeyUp} type='text' />
        <i className='filter-icon icon-search' />
      </div>
    )
  }
}

Filter.propTypes = {
  onFilter: PropTypes.func
}
