// Modules
import Api from 'repositories/api'
import SurveyEntity from 'entities/survey'

const SurveyModel = {

  list: (carerId) => {
    return Api.get('surveys', {carerId: carerId})
      .then((result) => {
        return result.map((item) => new SurveyEntity(item))
      })
  }
}

export default SurveyModel
