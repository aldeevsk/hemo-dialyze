import type { ISchema } from './schema'

export interface IDeviceSchema extends ISchema {
  volume: number
  unit: string
  groupSlug: string
  categorySlug: string
}
