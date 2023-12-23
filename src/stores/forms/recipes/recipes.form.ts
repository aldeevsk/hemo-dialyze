import type { IMedicationSchema } from '@/stores/schemas/medication.schema'

interface IRecipe {
  sessionNumber: number
  medication: IMedicationSchema
  startDate: string
  endDate: string
}

export interface IRecipeForm {
    [key: number]: IRecipe
}

export const recipeFormEmpty: IRecipeForm = []
