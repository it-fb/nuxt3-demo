import { APP, CODE } from '~/constants'

async function request(url: string, options: any) {
  url = APP.api + url
  options.headers = {
    'content-type': 'application/json',
    ...options.headers,
  }

  const temp = (await fetch(url, {
    ...options,
  }).then((res: any) => {
    // token
    return res
  }).catch((err: any) => {
    return Promise.reject(err)
  })).json()

  return new Promise((resolve, reject) => {
    temp.then((res: any) => {
      switch (res.code) {
      case CODE.ERROR:
        reject(res)
        break
      default:
        resolve(res)
        break
      }
    }).catch((err: any) => {
      reject(err.message)
    })
  })
}

export default new class Request {
  get(url: string, params?: any) {
    return request(url, {
      method: 'get',
      query: params,
    })
  }

  post(url: string, data?: any) {
    return request(url, {
      method: 'post',
      body: JSON.stringify(data),
    })
  }

  put(url: string, data?: any) {
    return request(url, {
      method: 'put',
      body: JSON.stringify(data),
    })
  }

  delete(url: string, params?: any) {
    return request(url, {
      method: 'delete',
      params,
    })
  }
}()
