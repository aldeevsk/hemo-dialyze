import { ref } from 'vue'
import { defineStore } from 'pinia'
import type  { IAnySchema, IDeviceSchema, IMedicationSchema, IGroupSchema, IProcedureSchema } from './schemas'
import { api } from '@/services/api'

interface IProductsSchema {
  devices: IDeviceSchema[]
  medications: IMedicationSchema[]
  groups: IGroupSchema[]
}

export const useProductsStore = defineStore('products', () => {

  const devices = ref<IDeviceSchema[]>([])

  const medications = ref<IMedicationSchema[]>([])

  const groups = ref<IGroupSchema[]>([])

  const products = ref<IProductsSchema>({
    devices: devices.value,
    medications: medications.value,
    groups: groups.value
  })

  function all(): typeof products {
      return products
  }

  function filterDevices({slug='', categorySlug='', groupSlug=''}): IDeviceSchema[] {
    let result = devices.value
    if(slug.length) result = result.filter(i => i.slug === slug)
    if(categorySlug.length) result = result.filter(i => i.categorySlug === categorySlug)
    if(groupSlug.length) result = result.filter(i => i.groupSlug === groupSlug)
    return result
  }

  function filterMedications({ slug = '', categorySlug = '', groupSlug = '' }): IMedicationSchema[] {
    let result = medications.value
    if (slug.length) result = result.filter((i) => i.slug === slug)
    if (categorySlug.length) result = result.filter((i) => i.categorySlug === categorySlug)
    if (groupSlug.length) result = result.filter((i) => i.groupSlug === groupSlug)
    return result
  }

  function filterBy(table: 'devices' | 'medications' , {slug='', categorySlug='', groupSlug=''}): IDeviceSchema[] | IMedicationSchema[] {
    let result: IDeviceSchema[] | IMedicationSchema[] = []
    if(table === 'devices') result = filterDevices({slug, categorySlug, groupSlug}) || []
    if(table === 'medications') result = filterMedications({slug, categorySlug, groupSlug}) || []
    return result
  }
  function fetchData(): void {
      devices.value = api.get<'devices'>('devices') || []
      medications.value = api.get<'medications'>('medications') || []
      groups.value = api.get<'groups'>('groups') || []
  }
  fetchData()
  return { all, fetchData, filterBy }
})
