import { ref } from 'vue'
import { defineStore } from 'pinia'
import { type IDialyzeForm, dialyzeFormEmpty, type IRecipeForm, recipeFormEmpty, type IAthomeForm, athomeFormEmpty } from './forms'
import { api } from '@/services/api'


export interface IFormSchema {
    dialyze: IDialyzeForm
    recipes: IRecipeForm
    athome: IAthomeForm
}

export const useFormsStore = defineStore('forms', () => {
    const form = ref<IFormSchema>({
      dialyze: dialyzeFormEmpty,
      recipes: recipeFormEmpty,
      athome: athomeFormEmpty
    })

    function get<T extends keyof IFormSchema>(formProp: T): IFormSchema[T] {
        return form.value[formProp] || []
    }

    function setFormProp<T extends keyof IFormSchema>( formProp: T, propKey: keyof IFormSchema[T], newValue: IFormSchema[T][typeof propKey] ): void {
      form.value[formProp][propKey] = newValue
    }

    async function sendForm(): Promise<void> {
      await api.post('/api/new_form', form.value)
    }

    return { get, setFormProp, sendForm }
})