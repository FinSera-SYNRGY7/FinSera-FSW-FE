import axios, { AxiosError } from 'axios'
import { globalNavigate } from './utils'

const httpServer = axios.create({
  // baseURL: import.meta.env.VITE_AXIOS_BASE_URL,
  baseURL: 'https://finsera-api.site',
})

httpServer.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_token') || ''
    config.headers.Authorization = `Bearer ${token}`
    
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

httpServer.interceptors.response.use(
  (response) => {
    if(response.status == 200 || response.status == 201) {
      return response
    }
    else {
      return Promise.reject({message: 'Error'})
    }
  },
  (error) => {
    if(error.response) {
      if(error.response.status == 403 || error.response.status == 401) {
        const pinAppLock = localStorage.getItem('pin_app_lock')
        
        if(error.response.data.message == 'Pin yang anda masukkan salah') {
          throw new AxiosError((error))
        } else {

          localStorage.removeItem('auth_token')
          localStorage.removeItem('auth_name')
          
          if(pinAppLock == null) {
            globalNavigate('/')
          } else {
            globalNavigate('/relog')
          }
        }
      } else {
        throw new AxiosError((error))
      }
    } else {
      return Promise.reject(error)
    }
  }
)

export  {
  httpServer 
}
