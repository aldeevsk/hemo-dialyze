import { api } from '@/services/api'
import { type ISchema } from '@/stores/schemas/schema'
import type { TUnionSchema, IDeviceSchema, IMedicationSchema, IGroupSchema } from '@/stores/schemas'
import { useStore } from '@/stores'

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
  programs: api.filterBy('procedures', { by: 'categorySlug', value: 'programs' }) || [],
  // programs: store.procedures.filterBy({key: 'categorySlug', value: 'program'}) || [],
  dialyzers: api.filterBy('devices', { by: 'groupSlug', value: 'dialyzer' }) || [],
  concentrators: api.filterBy('devices', { by: 'categorySlug', value: 'concentrator' }) || [],
  injectionTypes: api.filterBy('groups', { by: 'categorySlug', value: 'injectionType' }) || [],
  needles: api.filterBy('devices', { by: 'categorySlug', value: 'needle' }) || [],
  needleTypes: api.filterBy('devices', { by: 'categorySlug', value: 'needleType' }) || []
}

interface IStore extends ReturnType<typeof useStore> {}
// interface ISubstore extends ReturnType<typeof useStore> {}

type TGetFormPropOtionsMethod = (store: IStore) => IDeviceSchema[] | IMedicationSchema[] | IGroupSchema[]

interface IFormOptions {
  dialyze: {
    programs: ISchema[]
    dialyzers: TGetFormPropOtionsMethod
    concentrators: TGetFormPropOtionsMethod
    injectionTypes: ISchema[]
    needles: TGetFormPropOtionsMethod
    needleTypes: TGetFormPropOtionsMethod
    catheters: TGetFormPropOtionsMethod
    catheterTypes: TGetFormPropOtionsMethod
    bicarbonates: TGetFormPropOtionsMethod
    anticoagulants: TGetFormPropOtionsMethod
  }
}

export const formOptions: IFormOptions = {
  dialyze: {
    programs: [{id: 1, slug: 'hd', label: 'HD'}, {id: 2, slug: 'hdf', label: 'HDF'}, {id: 3, slug: 'uf', label: 'UF'}],
    dialyzers: (store: IStore) => store.devices.filterBy({key: 'groupSlug', value: 'dialyzers'}),
    concentrators: (store: IStore) => store.devices.filterBy({key: 'groupSlug', value: 'concentrators'}),
    injectionTypes: [{id: 1, slug: 'needle', label: 'Игла'}, {id: 2, slug: 'catheter', label: 'Катетер'}],
    needles: (store: IStore) => store.devices.filterBy({key: 'groupSlug', value: 'needles'}),
    needleTypes: (store: IStore) => store.devices.filterBy({key: 'groupSlug', value: 'needleTypes'}),
    catheters: (store: IStore) => store.devices.filterBy({key: 'groupSlug', value: 'catheters'}),
    catheterTypes: (store: IStore) => store.devices.filterBy({key: 'groupSlug', value: 'catheterTypes'}),
    bicarbonates: (store: IStore) => store.devices.filterBy({key: 'groupSlug', value: 'bicarbonates'}),
    anticoagulants: (store: IStore) => store.devices.filterBy({key: 'groupSlug', value: 'anticoagulants'}),
  }
}
