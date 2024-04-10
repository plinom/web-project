import axios from 'axios'
import {
  ICheckCode,
  IForgotPassword,
  LoginUser,
  RegistrationUser,
} from '../interfaces/Interfaces'

export const Services = {
  async registrateUser(regUser: RegistrationUser) {
    const response = await axios.post<RegistrationUser>(
      'http://localhost:8000/api/auth/',
      regUser
    )
    return response.data['detail']
  },
  async loginUser(logUser: LoginUser) {
    const response = await axios.post<LoginUser>(
      'http://localhost:8000/api/login/',
      logUser
    )
    return response.data['detail']
  },
  async forgotPassword(data: IForgotPassword) {
    const response = await axios.post<IForgotPassword>(
      'http://localhost:8000/api/password/',
      data
    )
    return response.data['detail']
  },
  async checkCode(code: ICheckCode) {
    const response = await axios.post<ICheckCode>(
      'http://localhost:8000/api/code/',
      code
    )
    return response.data['detail']
  },
}
