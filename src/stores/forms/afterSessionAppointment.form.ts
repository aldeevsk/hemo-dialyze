import type { IMedicationSchema } from '../schemas/medication.schema'

interface IRecipe {
    sessionNumber: number
    medication: IMedicationSchema
    startDate: string
    endDate: string
}

export interface IAfterSessionAppointmentForm extends Array<IRecipe> {}
