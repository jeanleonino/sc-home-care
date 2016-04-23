// Core
import {PropTypes} from 'react'
import ReactEntity from 'react-entity'

// Modules
import {MALE, FEMALE} from 'repositories/constants'

class SurveyEntity extends ReactEntity {
  static SCHEMA = {
    id: PropTypes.number,
    start: PropTypes.number,
    end: PropTypes.number,
    carer: PropTypes.shape({
      id: PropTypes.number
    }),
    patient: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      birth: PropTypes.number,
      gender: PropTypes.oneOf([MALE, FEMALE]),
      address: PropTypes.string,
      carers: PropTypes.arrayOf(PropTypes.string)
    })
  }
}

export default SurveyEntity
