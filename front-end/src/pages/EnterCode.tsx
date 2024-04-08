import { Form, Input } from 'antd'
import React from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import CustomButton from '../components/CustomButton'
import Redirect from '../components/Redirect'
import RequiredHandler from '../components/RequiredHandler'
import { ICheckCode } from '../interfaces/Interfaces'
import MainLayout from '../layouts/MainLayout'
import { Services } from '../services/Services'

export const EnterCode = () => {
  const navigate = useNavigate()
  const [codeResponse, setCodeResponse] = React.useState('')
  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<ICheckCode>({
    mode: 'onChange',
  })
  const onSubmit: SubmitHandler<ICheckCode> = async data => {
    const response: string = await Services.checkCode(data)
    setCodeResponse(response)
    if (response === 'Code correct') navigate('/new-password')
    reset()
  }
  return (
    <MainLayout>
      <Form
        onSubmitCapture={handleSubmit(onSubmit)}
        className='max-w-[400px] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full items-center text-center'
      >
        <h1 className='text-[20px] mb-1 text-left'>Forgot password</h1>
        <Controller
          rules={{ required: 'Number is required' }}
          name='code'
          control={control}
          render={({ field }) => (
            <>
              <Input.OTP
                length={10}
                style={{ marginBottom: '10px' }}
                formatter={str => str.toUpperCase()}
                {...field}
              />
              {errors.code && <RequiredHandler content={errors.code.message} />}
            </>
          )}
        />
        <CustomButton content={'Submit'} />
        <div className='flex items-start justify-between mt-1'>
          <Redirect path={'/'} content={'Login'} />
          <Redirect path={'/auth'} content={'Registration'} />
        </div>
        {codeResponse}
      </Form>
    </MainLayout>
  )
}
