import type { ISchema } from '../schemas/schema'
import type { IMedicationSchema } from '../schemas/medication.schema'
import { type IDialyzeFormOptions, dialyzeFormOptions } from '../formOptions/dialyze.formOptions'

export interface IDialyzeForm {
  program: ISchema | undefined
  dialyzer: ISchema | undefined
  concentrator: IMedicationSchema | undefined
  injectionType: ISchema | undefined
  injector: ISchema | undefined
  injectorType: ISchema | undefined
  bicarbonate: ISchema | undefined
  patientWeight: number | undefined
  anticoagulant: IMedicationSchema | undefined
}

export const dialyzeFormEmpty: IDialyzeForm = {
  program: {id: 1, slug: 'hd', label: 'HD'},
  dialyzer: undefined,
  concentrator: undefined,
  injectionType: {id: 1, slug: 'needle', label: 'Игла'},
  injector: undefined,
  injectorType: undefined,
  bicarbonate: undefined,
  patientWeight: undefined,
  anticoagulant: undefined,
}

export function formHandler(newForm: IDialyzeForm = dialyzeFormEmpty, newFormOptions: IDialyzeFormOptions = dialyzeFormOptions) {
  const form = {...newForm}
  const formOptions = {...newFormOptions}

  function setProgram(slug: string) {
    const program = formOptions.programs.find(p => p.slug === slug)
    if(program) form.program = program
  }

  function findOption(key: keyof IDialyzeFormOptions, slug: string) {
    const option = formOptions[key]
    if(option) {
      return
    }
  }

  return { form, setProgram }
}


export function setDialyzeFormProp<K extends keyof IDialyzeForm>(key: K, newValue: IDialyzeForm[K]): void {
    dialyzeFormEmpty[key] = newValue
}
