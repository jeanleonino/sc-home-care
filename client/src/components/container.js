// Core
import React, {Component} from 'react'

// Modules
import Content from 'components/content'
import Sidebar from 'components/sidebar'

export default class Container extends Component {

  constructor (props) {
    super(props)
    this.state = {
      carerId: 1
    }
  }

  render () {
    const {state: {carerId}} = this
    return (
      <div className='container'>
        <Sidebar carerId={carerId} />
        <Content />
      </div>
    )
  }
}
