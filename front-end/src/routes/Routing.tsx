import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Auth } from '../pages/Auth'
import { Login } from '../pages/Login'

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
    </BrowserRouter>
  )
}
