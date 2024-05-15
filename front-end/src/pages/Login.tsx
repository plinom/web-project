import { Form, Input } from 'antd'
import React from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import CustomButton from '../components/CustomButton'
import Redirect from '../components/Redirect'
import RequiredHandler from '../components/RequiredHandler'
import { LoginUser } from '../interfaces/Interfaces'
import MainLayout from '../layouts/MainLayout'
import { Services } from '../services/Services'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const [passwordVisible, setPasswordVisible] = React.useState(false)
  const [loginResponse, setLoginResponse] = React.useState<string>('')
  const navigate = useNavigate();
  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<LoginUser>({
    mode: 'onChange',
  })
  const onSubmit: SubmitHandler<LoginUser> = async data => {
    const response: string = await Services.loginUser(data)
    setLoginResponse(response)
    if (response === 'True'){
      navigate('/landing')
    }
    reset()
  }
  return (
    <MainLayout>
      <Form
        onSubmitCapture={handleSubmit(onSubmit)}
        className='max-w-[400px] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full'
      >
        <h1 className='text-[20px] text-white mb-3'>Login</h1>
        <Controller
          rules={{ required: 'Email is required' }}
          name='email'
          control={control}
          render={({ field }) => (
            <>
              <Input {...field} className='mb-2' placeholder='Your email' />
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
                className='mb-2'
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
        <div className='flex items-start justify-between mt-1'>
          <Redirect path={'/auth'} content={'Registration'} />
          <Redirect path={'/password'} content={'Forgot password'} />
        </div>
        {loginResponse}
      </Form>
    </MainLayout>
  )
}
