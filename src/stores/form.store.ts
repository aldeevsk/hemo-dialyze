// import { defineStore } from 'pinia'
// import { type IForm, form } from './forms'
// import { api } from '@/services/api'


// export const useFormsStore = defineStore('forms', () => {

//     function getForm(): typeof form {
//       return form
//     }

//     function get<T extends keyof IForm>(formProp: T): IForm[T] {
//       return form.value[formProp] || []
//     }

//     function setFormProp<T extends keyof IForm>( formProp: T, propKey: keyof IForm[T], newValue: IForm[T][typeof propKey] ): void {
//       form.value[formProp][propKey] = newValue
//     }

//     async function sendForm(): Promise<void> {
//       await api.post('/api/new_form', form.value)
//     }

//     return { getForm, get, setFormProp, sendForm }
// })