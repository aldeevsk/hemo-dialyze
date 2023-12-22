import { ref } from 'vue'
import { defineStore } from 'pinia'
import { appointmentForm, type IAppointmentSchema } from './forms/appointment.form'

export const useAppointmentStore = defineStore('appointment', () => {
    const appointment = ref<IAppointmentSchema>(appointmentForm)

    function getProp<K extends keyof IAppointmentSchema>(key: K): IAppointmentSchema[K] {
        return appointment.value[key]
    }

    function setProp<K extends keyof IAppointmentSchema>(key: K, newValue: IAppointmentSchema[K]): void {
        appointment.value[key] = newValue
    }

    return { getProp, setProp }
})
