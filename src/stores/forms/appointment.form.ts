import { ref } from 'vue'
import { type IDialyzeForm, dialyzeFormEmpty } from './dialyze.form'

interface IUser {
    id: number
    fullname: string
}

export interface IAppointmentSchema {
    patient: IUser | undefined
    doctor: IUser | undefined
    dialyze: IDialyzeForm
}

export const appointmentForm: IAppointmentSchema = {
  patient: undefined,
  doctor: undefined,
  dialyze: dialyzeFormEmpty
}