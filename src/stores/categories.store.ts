import { ref } from 'vue'
import { defineStore } from 'pinia'
import { type ICategorySchema } from './schemas/category.schema'
import { api } from '@/services/api'

export const useCategoriesStore = defineStore('categories', () => {
  const categories = ref<ICategorySchema[]>([])

  function all(): ICategorySchema[] {
    return categories.value
  }

  function findOne({
    key,
    value
  }: {
    key: 'id' | 'slug'
    value: number | string
  }): ICategorySchema | void {
    return categories.value.find((c) => c[key] === value)
  }

  function filterBy<K extends keyof ICategorySchema>({
    key,
    value
  }: {
    key: K
    value: ICategorySchema[K]
  }): ICategorySchema[] {
    return categories.value.filter((m) => m[key] === value)
  }

  function fetchData(): void {
    categories.value = api.get('categories') || []
  }

  return { all, findOne, filterBy, fetchData }
})
