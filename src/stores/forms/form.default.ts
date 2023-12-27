import { ref } from 'vue'
import { type IMedicationSchema, type IDeviceSchema } from '@/stores/schemas'

interface IDialyzeForm {
  program: ISchema | undefined
  dialyzer: ISchema | undefined
  concentrator: IMedicationSchema | undefined
  injectionType: ISchema | undefined
  injector: IDeviceSchema | undefined
  injectorType: ISchema | undefined
  bicarbonate: IMedicationSchema | undefined
  patientWeight: number | undefined
  anticoagulant: IMedicationSchema | undefined
}

const dialyzeForm: IDialyzeForm = {
  program: { id: 1, slug: 'hd', label: 'HD' },
  dialyzer: undefined,
  concentrator: undefined,
  injectionType: { id: 1, slug: 'needle', label: 'Игла' },
  injector: undefined,
  injectorType: undefined,
  bicarbonate: undefined,
  patientWeight: undefined,
  anticoagulant: undefined
}

interface IRecipesForm {}

const recipesForm: IRecipesForm = {}

interface IAthomeForm {}

const athomeForm: IAthomeForm = {}

interface IForm {
    dialyze: IDialyzeForm
    recipes: IRecipesForm
    athome: IAthomeForm
}

export const form = ref<IForm>({
  dialyze: dialyzeForm,
  recipes: recipesForm,
  athome: athomeForm
})

interface ISetFormOptions<SF extends keyof IForm> {
  prop: keyof IForm[SF]
  newValue: IForm[SF][keyof IForm[SF]]
  onEnd?: Function
}

function setFormProp<SF extends keyof IForm>( subform: SF, options: ISetFormOptions<SF>): void {
  const { prop, newValue, onEnd } = options
  form.value[subform][prop] = newValue
  if(onEnd) onEnd()
}

setFormProp('dialyze', { prop: 'program', newValue: {id: 1, slug: 'hd', label: 'HD'}})

// function setFormProp<SF extends keyof IForm>( subform: SF, prop: keyof IForm[SF], newProp: IForm[SF][typeof prop], onEnd?: Function): void {
//   form.value[subform][prop] = newProp
//   if(onEnd) onEnd()
// }