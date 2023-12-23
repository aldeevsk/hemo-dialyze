import { api } from '@/services/api'
import { type ISchema } from '@/stores/schemas/schema'

const emptySchema: ISchema = { id: -1, slug: '', label: ''}

export interface IDialyzeFormOptions {
  categories: {
    dialyzer: ISchema
    concentrator: ISchema
    needle: ISchema
    needleType: ISchema
    catheter: ISchema
    catheterType: ISchema
  }
  programs: ISchema[]
  dialyzers: ISchema[]
  concentrators: ISchema[]
  injectionTypes: ISchema[]
  needles: ISchema[]
  needleTypes: ISchema[]
}

export const dialyzeFormOptions: IDialyzeFormOptions = {
  categories: {
    dialyzer: api.findBy('categories', { slug: 'dialyzer' }) || emptySchema,
    concentrator: api.findBy('categories', { slug: 'concentrator' }) || emptySchema,
    needle: api.findBy('categories', { slug: 'needle' }) || emptySchema,
    needleType: api.findBy('categories', { slug: 'needleType' }) || emptySchema,
    catheter: api.findBy('categories', { slug: 'catheter' }) || emptySchema,
    catheterType: api.findBy('categories', { slug: 'catheterType' }) || emptySchema
  },
  programs: api.filterBy('procedures', { by: 'categorySlug', value: 'program' }) || [],
  // programs: store.procedures.filterBy({key: 'categorySlug', value: 'program'}) || [],
  dialyzers: api.filterBy('devices', { by: 'groupSlug', value: 'dialyzer' }) || [],
  concentrators: api.filterBy('devices', { by: 'categorySlug', value: 'concentrator' }) || [],
  injectionTypes: api.filterBy('groups', { by: 'categorySlug', value: 'injectionType' }) || [],
  needles: api.filterBy('devices', { by: 'categorySlug', value: 'needle' }) || [],
  needleTypes: api.filterBy('devices', { by: 'categorySlug', value: 'needleType' }) || []
}
