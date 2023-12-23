import { type IMedicationSchema, type IDeviceSchema } from "@/stores/schemas"

export interface IDialyzeForm {
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

export const dialyzeFormEmpty: IDialyzeForm = {
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
