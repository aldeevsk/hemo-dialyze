import { type ISchema } from './schema'

export interface IAnySchema extends ISchema {
  [key: string]: any
}
