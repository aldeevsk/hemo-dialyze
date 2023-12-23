import { type ISchema } from './schema'
import { type IAnySchema } from './any.schema'
import { type ICategorySchema } from './category.schema'
import { type IDeviceSchema } from './device.schema'
import { type IMedicationSchema } from './medication.schema'
import { type IProcedureSchema } from './procedures.schema'
import { type IGroupSchema } from './group.schema'

type TUnionSchema = ICategorySchema | IDeviceSchema | IMedicationSchema | IProcedureSchema | IGroupSchema

interface ICombinedSchema<T extends ICategorySchema | IDeviceSchema | IMedicationSchema | IProcedureSchema | IGroupSchema> {
  data: T
}

export function toISchema(schema: TUnionSchema): ISchema {
  return { id: schema.id, slug: schema.slug, label: schema.label }
}

export type {
  IAnySchema,
  ICategorySchema,
  IDeviceSchema,
  IMedicationSchema,
  IProcedureSchema,
  IGroupSchema,
  TUnionSchema,
  ICombinedSchema
}
