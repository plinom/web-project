import axios from 'axios'
import {
  ICheckCode,
  IDays,
  IForgotPassword,
  INameByEmail,
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
  async getTrainings() {
    const response = await axios.get<IDays>(
      'http://localhost:8000/api/trainings/'
    )
    return response.data['data']
  },
  async getuserdata(email: INameByEmail) {
    console.log('getuser')
    console.log(email)
    const response = await axios.post<INameByEmail>(
      'http://localhost:8000/api/getname/',
      email
    )
    return response.data
  },
}
