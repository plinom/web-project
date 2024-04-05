import { Button, Input } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout'

export const Login = () => {
  const [passwordVisible, setPasswordVisible] = React.useState(false)
  return (
    <MainLayout>
      <form
        action=''
        className='max-w-[400px] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'
      >
        <Input className='my-[5px]' type='email' placeholder='Email' />
        <Input.Password
          className='my-[5px]'
          placeholder='input password'
          visibilityToggle={{
            visible: passwordVisible,
            onVisibleChange: setPasswordVisible,
          }}
        />
        <Button type='link' block>
          <Link to={'/auth'}>Auth</Link>
        </Button>
      </form>
    </MainLayout>
  )
}
