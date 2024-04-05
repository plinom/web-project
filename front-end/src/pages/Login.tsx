import { Button, Form, Input } from 'antd'
import React from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { CustomButton } from '../components/CustomButton'
import { RequiredHandler } from '../components/RequiredHandler'
import { LoginUser } from '../interfaces/Interfaces'
import { MainLayout } from '../layouts/MainLayout'

export const Login = () => {
  const [passwordVisible, setPasswordVisible] = React.useState(false)
  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<LoginUser>({
    mode: 'onChange',
  })
  const onSubmit: SubmitHandler<LoginUser> = data => {
    console.log(data)
    reset()
  }
  return (
    <MainLayout>
      <Form
        onSubmitCapture={handleSubmit(onSubmit)}
        className='max-w-[400px] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full'
      >
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
        <Button type='link' block>
          <Link to={'/auth'}>Registration</Link>
        </Button>
      </Form>
    </MainLayout>
  )
}
