const Api = {

  get: (endpoint) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          const result = require(`mocks/${endpoint}`)
          resolve(result)
        } catch (error) {
          reject(error)
        }
      }, 1000)
    })
  }
}

export default Api
