import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons'
import { Input, Tooltip } from 'antd'
import React from 'react'
import { MainLayout } from '../layouts/MainLayout'

export const Auth = () => {
  const [passwordVisible, setPasswordVisible] = React.useState(false)
  return (
    <MainLayout>
      <form
        action=''
        className='max-w-[400px] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'
      >
        <Input
          className='my-[5px]'
          placeholder='Enter your username'
          prefix={<UserOutlined className='site-form-item-icon' />}
          suffix={
            <Tooltip title='Extra information'>
              <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
            </Tooltip>
          }
        />
        <Input className='my-[5px]' type='email' placeholder='Email' />
        <Input.Password
          className='my-[5px]'
          placeholder='Enter your password'
          visibilityToggle={{
            visible: passwordVisible,
            onVisibleChange: setPasswordVisible,
          }}
        />
      </form>
    </MainLayout>
  )
}
