import { ref } from 'vue'
import { defineStore } from 'pinia'
import { type IProcedureSchema } from './schemas'
import { api } from '@/services/api'

export const useProceduresStore = defineStore('procedures', () => {
  const procedures = ref<IProcedureSchema[]>([])

  function all(): IProcedureSchema[] {
    return procedures.value
  }

  function findOne({
    key,
    value
  }: {
    key: 'id' | 'slug'
    value: number | string
  }): IProcedureSchema | void {
    return procedures.value.find((c) => c[key] === value)
  }

  function filterBy<K extends keyof IProcedureSchema>({
    key,
    value
  }: {
    key: K
    value: IProcedureSchema[K]
  }): IProcedureSchema[] {
    return procedures.value.filter((m) => m[key] === value)
  }

  function fetchData(): void {
    procedures.value = api.get('procedures') || []
  }

  fetchData()
  return { all, findOne, filterBy, fetchData }
})
