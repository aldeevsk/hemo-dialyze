import type  { IDeviceSchema, IMedicationSchema, IGroupSchema } from '../schemas'
import { type IStore } from '..'


type TGetFormPropOtionsMethod = (store: IStore) => IDeviceSchema[] | IMedicationSchema[] | IGroupSchema[]

export interface IFormOptions {
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
  recipes: {
    medcations: TGetFormPropOtionsMethod
  }
  athome: {
    medcations: TGetFormPropOtionsMethod
  }
}

export const formOptions: IFormOptions = {
  dialyze: {
    programs: [{id: 1, slug: 'hd', label: 'HD'}, {id: 2, slug: 'hdf', label: 'HDF'}, {id: 3, slug: 'uf', label: 'UF'}],
    dialyzers: (store: IStore) => store.devices.filterBy({key: 'categorySlug', value: 'dialyzers'}),
    concentrators: (store: IStore) => store.devices.filterBy({key: 'categorySlug', value: 'concentrators'}),
    injectionTypes: [{id: 1, slug: 'needle', label: 'Игла'}, {id: 2, slug: 'catheter', label: 'Катетер'}],
    needles: (store: IStore) => store.devices.filterBy({key: 'categorySlug', value: 'needles'}),
    needleTypes: (store: IStore) => store.groups.filterBy({key: 'categorySlug', value: 'needleTypes'}),
    catheters: (store: IStore) => store.devices.filterBy({key: 'categorySlug', value: 'catheters'}),
    catheterTypes: (store: IStore) => store.groups.filterBy({key: 'categorySlug', value: 'catheterTypes'}),
    bicarbonates: (store: IStore) => store.medications.filterBy({key: 'categorySlug', value: 'bicarbonates'}) || [],
    anticoagulants: (store: IStore) => store.medications.filterBy({key: 'categorySlug', value: 'anticoagulants'}),
  },
  recipes: {
    medcations: (store: IStore) => store.medications.all()
  },
  athome: {
    medcations: (store: IStore) => store.medications.all()
  }
}


export function getOptions(store: IStore, subForm: keyof IFormOptions, prop: keyof IFormOptions[typeof subForm]): any {
  const option = formOptions[subForm][prop] as TGetFormPropOtionsMethod
  if (option instanceof Function) return option(store)
}