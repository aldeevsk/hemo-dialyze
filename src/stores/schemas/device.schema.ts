import type { ISchema } from './schema'

export interface IDeviceSchema extends ISchema {
  groupSlug: string
  categorySlug: string
}
