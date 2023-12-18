import { ref } from 'vue'
import type { IDialyzeForm } from "./dialyze.form"


interface IAppointmentSchema {
    patient: {id: number, fullname: string} | undefined
    doctor: {id: number, fullname: string} | undefined
    dialyze: IDialyzeForm | undefined
}

export const appointmentForm = ref<IAppointmentSchema>({
    patient: undefined,
    doctor: undefined,
    dialyze: undefined,
})