import { Form, Input } from 'antd'
import React from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import CustomButton from '../components/CustomButton'
import Redirect from '../components/Redirect'
import RequiredHandler from '../components/RequiredHandler'
import { IForgotPassword } from '../interfaces/Interfaces'
import MainLayout from '../layouts/MainLayout'
import { Services } from '../services/Services'

export const ForgotPassword = () => {
  const navigate = useNavigate()
  const [forgotPasswordResponse, setForgotPasswordResponse] =
    React.useState<string>()
  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<IForgotPassword>({
    mode: 'onChange',
  })
  const onSubmit: SubmitHandler<IForgotPassword> = async data => {
    const response: string = await Services.forgotPassword(data)
    setForgotPasswordResponse(response)
    if (response === 'Letter send successfully') navigate('/code')
    reset()
  }
  return (
    <MainLayout>
      <Form
        onSubmitCapture={handleSubmit(onSubmit)}
        className='max-w-[400px] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full'
      >
        <h1 className='text-[20px] mb-1'>Forgot password</h1>
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

        <CustomButton content={'Submit'} />
        <div className='flex items-start justify-between mt-1'>
          <Redirect path={'/'} content={'Login'} />
          <Redirect path={'/auth'} content={'Registration'} />
        </div>
        {forgotPasswordResponse}
      </Form>
    </MainLayout>
  )
}
