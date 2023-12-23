
interface IAthomeRecipe {
    medication: string
    takingMethod: string
    dosage: number
    unit: string
    timesInDay: string
    startDate: string
    endDate: string
}

export interface IAthomeForm {
    recipes: IAthomeRecipe[]
    recommendations: string[]
}

export const athomeFormEmpty: IAthomeForm = {
    recipes: [],
    recommendations: []
}