import { ref } from 'vue'
import { defineStore } from 'pinia'
import { type IDeviceSchema } from './schemas'
import { api } from '@/services/api'

export const useDevicesStore = defineStore('devices', () => {
  const devices = ref<IDeviceSchema[]>([])

  function all(): IDeviceSchema[] {
    return devices.value
  }

  function findOne({
    key,
    value
  }: {
    key: 'id' | 'slug'
    value: number | string
  }): IDeviceSchema | void {
    return devices.value.find((c) => c[key] === value)
  }

  function filterBy<K extends keyof IDeviceSchema>({
    key,
    value
  }: {
    key: K
    value: IDeviceSchema[K]
  }): IDeviceSchema[] {
    if(!devices.value.length) fetchData()
    return devices.value.filter((m) => m[key] === value)
  }

  function fetchData(): void {
    devices.value = api.get('devices') || []
  }


  return { all, findOne, filterBy, fetchData }
})
