import type { ISchema } from './schema'

export enum TakingMethods {
  peroral = 'peroral'
}

export interface IMedicationSchema extends ISchema {
  takingMethod: string
  volume: number
  unit: string
  dosage: number
  groupSlug: string
  categorySlug: string
}
