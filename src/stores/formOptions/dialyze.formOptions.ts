import { type ISchema } from '../schemas/schema'
import { api } from '@/services/api'
import { type IProductSchema } from '@/_mockdata'

const emptySchema: ISchema = {id: 0, slug: '', label: 'Пустая категория'}

export interface IDialyzeFormOptions {
  categories: {
    dialyzers: ISchema
    concentrators: ISchema
    needles: ISchema
    needleTypes: ISchema
    catheters: ISchema
    catheterTypes: ISchema
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
    dialyzers: api.findBy('categories', { slug: 'dialyzer' }) || emptySchema,
    concentrators: api.findBy('categories', { slug: 'concentrator' }) || emptySchema,
    needles: api.findBy('categories', { slug: 'needle' }) || emptySchema,
    needleTypes: api.findBy('categories', {slug: 'needleType'}) || emptySchema,
    catheters: api.findBy('categories', {slug: 'catheter'}) || emptySchema,
    catheterTypes: api.findBy('categories', {slug: 'catheterType'}) || emptySchema,
  },
  programs: api.filterBy('products', { by: 'categorySlug', value: 'program' }) || [],
  dialyzers: api.filterBy('products', { by: 'categorySlug', value: 'dialyzer' }) || [],
  concentrators: api.filterBy('products', { by: 'categorySlug', value: 'concentrator' }) || [],
  injectionTypes: api.filterBy('products', { by: 'categorySlug', value: 'injectionType' }) || [],
  needles: api.filterBy('products', { by: 'categorySlug', value: 'needle' }) || [],
  needleTypes: api.filterBy('products', { by: 'categorySlug', value: 'needleType' }) || [],
}
