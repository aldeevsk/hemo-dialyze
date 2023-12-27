import { ref } from 'vue'
import { defineStore } from 'pinia'
import { type IGroupSchema } from './schemas'
import { api } from '@/services/api'

export const useGroupsStore = defineStore('groups', () => {
  const groups = ref<IGroupSchema[]>([])

  function all(): IGroupSchema[] {
    if (!groups.value.length) fetchData()
    return groups.value
  }

  function filterBy<K extends keyof IGroupSchema>({ key, value }: { key: K, value: IGroupSchema[K] }) {
    if (!groups.value.length) fetchData()
    return groups.value.filter((m) => m[key] === value)
  }

  function fetchData(): void {
    groups.value = api.get('groups') || []
  }

  return { all, filterBy, fetchData }
})
