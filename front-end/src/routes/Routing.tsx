import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CalendarPage } from '../pages/CalendarPage'
import { EnterCode } from '../pages/EnterCode'
import { ForgotPassword } from '../pages/ForgotPassword'
import { Login } from '../pages/Login'
import MyPage from '../pages/MyPage'
import { NewPassword } from '../pages/NewPassword'
import Normal from '../pages/NormalLanding'
import { NotFound } from '../pages/NotFound'
import { Registration } from '../pages/Registration'

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/auth' element={<Registration />} />
        <Route path='/password' element={<ForgotPassword />} />
        <Route path='/code' element={<EnterCode />} />
        <Route path='/new-password' element={<NewPassword />} />
        <Route path='/main' element={<Normal />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/calendar' element={<CalendarPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
