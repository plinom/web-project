import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons'
import { Form, Input, Tooltip } from 'antd'
import React from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import CustomButton from '../components/CustomButton'
import Redirect from '../components/Redirect'
import RequiredHandler from '../components/RequiredHandler'
import { RegistrationUser } from '../interfaces/Interfaces'
import MainLayout from '../layouts/MainLayout'
import { Services } from '../services/Services'

export const Auth = () => {
  const [passwordVisible, setPasswordVisible] = React.useState(false)
  const [registrateUser, setRegistrateUser] = React.useState<string>('')
  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<RegistrationUser>({
    mode: 'onChange',
  })
  const onSubmit: SubmitHandler<RegistrationUser> = async data => {
    const response: string = await Services.registrateUser(data)
    setRegistrateUser(response)
    reset()
  }
  return (
    <MainLayout>
      <Form
        onSubmitCapture={handleSubmit(onSubmit)}
        className='max-w-[400px] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full'
      >
        <h1 className='text-[20px] mb-3'>Registration</h1>
        <Controller
          rules={{ required: 'Name is required' }}
          name='name'
          control={control}
          render={({ field }) => (
            <>
              <Input
                {...field}
                className='mb-2'
                placeholder='Your username'
                prefix={<UserOutlined className='site-form-item-icon' />}
                suffix={
                  <Tooltip title='Extra information'>
                    <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                  </Tooltip>
                }
              />
              {errors.name && <RequiredHandler content={errors.name.message} />}
            </>
          )}
        />
        <Controller
          rules={{ required: 'Email is required' }}
          name='email'
          control={control}
          render={({ field }) => (
            <>
              <Input
                {...field}
                className='my-2'
                type='email'
                placeholder='Your email'
              />
              {errors.email && (
                <RequiredHandler content={errors.email.message} />
              )}
            </>
          )}
        />
        <Controller
          rules={{ required: 'Password is required' }}
          name='password'
          control={control}
          render={({ field }) => (
            <>
              <Input.Password
                {...field}
                className='my-2'
                placeholder='Your password'
                visibilityToggle={{
                  visible: passwordVisible,
                  onVisibleChange: setPasswordVisible,
                }}
              />
              {errors.password && (
                <RequiredHandler content={errors.password.message} />
              )}
            </>
          )}
        />
        <CustomButton content={'Submit'} />
        <div className='mt-1'>
          <Redirect path={'/'} content={'Login'} />
        </div>
        {registrateUser}
      </Form>
    </MainLayout>
  )
}
