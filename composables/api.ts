import Request from '~/utils/request'

class API {
  getHello = () => Request.get('/hello')
}

export default new API()
