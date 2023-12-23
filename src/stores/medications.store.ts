import { ref } from 'vue'
import { defineStore } from 'pinia'
import { type IMedicationSchema } from './schemas/medication.schema'
import { api } from '@/services/api'

export const useMedicationsStore = defineStore('medications', () => {
  const medications = ref<IMedicationSchema[]>([])

  function all(): IMedicationSchema[] {
    if(!medications.value.length) fetchData()
    return medications.value
  }

  function filterBy<K extends keyof IMedicationSchema>({
    key,
    value
  }: {
    key: K
    value: IMedicationSchema[K]
  }) {
    return medications.value.filter((m) => m[key] === value)
  }

  function fetchData(): void {
    medications.value = api.get('medications') || []
  }

  return { all, filterBy, fetchData }
})
