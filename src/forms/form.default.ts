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

export interface IForm {
    dialyze: IDialyzeForm
    recipes: IRecipesForm
    athome: IAthomeForm
}

export const form = ref<IForm>({
  dialyze: dialyzeForm,
  recipes: recipesForm,
  athome: athomeForm
})

interface ISetFormOptions<P extends keyof IForm> {
  prop: keyof IForm[P]
  newValue: IForm[P][keyof IForm[P]]
  onEnd?: Function
}

export function setFormProp<P extends keyof IForm>( formPart: P, options: ISetFormOptions<P>): void {
  const { prop, newValue, onEnd } = options
  form.value[formPart][prop] = newValue
  if(onEnd) onEnd()
}

// setFormProp('dialyze', { prop: 'program', newValue: {id: 1, slug: 'hd', label: 'HD'}})
