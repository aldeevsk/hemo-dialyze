import type { ISchema } from '../schemas/schema'
import type { IMedicationSchema } from '../schemas/medication.schema'

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
  program: undefined,
  dialyzer: undefined,
  concentrator: undefined,
  injectionType: undefined,
  injector: undefined,
  injectorType: undefined,
  bicarbonate: undefined,
  patientWeight: undefined,
  anticoagulant: undefined,
}

// export function setDialyzeFormProp<K extends keyof IDialyzeForm>(key: K, newValue: IDialyzeForm[K]): void {
//     dialyzeFormEmpty.value[key] = newValue
// }
