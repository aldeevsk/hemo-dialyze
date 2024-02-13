import { defineStore } from 'pinia'
import { useCategoriesStore } from './categories.store'
import { useDevicesStore } from './devices.store'
import { useMedicationsStore } from './medications.store'
import { useProceduresStore } from './procedures.store'
import { useGroupsStore } from './groups.store'



export const useStore = defineStore('store', () => {
  const store = {
    categories: useCategoriesStore(),
    devices: useDevicesStore(),
    medications: useMedicationsStore(),
    procedures: useProceduresStore(),
    groups: useGroupsStore()
  }
  return store
})

export interface IStore extends ReturnType<typeof useStore> {}
