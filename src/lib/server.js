import axios, { AxiosError } from 'axios'
import { globalNavigate } from './utils'

const httpServer = axios.create({
  baseURL: import.meta.env.VITE_AXIOS_BASE_URL,
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
        // localStorage.removeItem('auth_token')
        // localStorage.removeItem('auth_name')
        
        // globalNavigate('/')
      
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