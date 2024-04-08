import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Auth } from '../pages/Auth'
import { EnterCode } from '../pages/EnterCode'
import { ForgotPassword } from '../pages/ForgotPassword'
import { Login } from '../pages/Login'
import { NewPassword } from '../pages/NewPassword'
import { NotFound } from '../pages/NotFound'

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/password' element={<ForgotPassword />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/code' element={<EnterCode />} />
        <Route path='/new-password' element={<NewPassword />} />
      </Routes>
    </BrowserRouter>
  )
}
