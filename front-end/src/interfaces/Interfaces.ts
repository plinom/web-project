export interface RegistrationUser {
  name: string
  email: string
  password: string
}

export interface LoginUser {
  email: string
  password: string
}

export interface IForgotPassword {
  email: string
}
export interface ICheckCode {
  code: string
}

export interface ExerciseData {
  exercise_name: string
  sets: number
  reps: number
  working_weight: string
  relax_time: string
  video_link: string
}

export interface IDays {
  days: ExerciseData[]
}

export interface INameByEmail {
  email: string
}
