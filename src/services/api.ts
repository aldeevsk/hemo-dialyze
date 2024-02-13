import { categories, devices, medications, procedures, groups } from '@/_mockdata'
import type {
  ICategorySchema,
  IDeviceSchema,
  IMedicationSchema,
  IProcedureSchema,
  IGroupSchema
} from '@/stores/schemas'

interface ITables {
  categories: ICategorySchema[]
  devices: IDeviceSchema[]
  medications: IMedicationSchema[]
  procedures: IProcedureSchema[]
  groups: IGroupSchema[]
}

const tables: ITables = {
  categories,
  devices,
  medications,
  procedures,
  groups
}

interface IGetOptions {
  slug?: string | undefined
  id?: number | undefined
}

export const api = {
  get<K extends keyof ITables>(table: K): ITables[K] | void {
    return tables[table]
  },
  findBy<K extends keyof ITables>(
    table: K,
    { slug = undefined, id = undefined }: IGetOptions
  ): ITables[K][number] | void {
    if (slug) return findBySlug(table, slug)
    if (id) return findById(table, id)
  },
  filterBy<K extends keyof ITables>(
    table: K,
    { by, value }: { by: keyof ITables[K][number]; value: string }
  ): ITables[K][number][] {
    return tables[table].filter((p: ITables[K][number]) => p[by] === value)
  },
  async post(url: string, body: any): Promise<void> {
    try {
      const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body)
      })
      if(!res.ok) {
        const errorMessage = `Error on api.post: ${res.status} ${res.statusText}`
        console.error(errorMessage)
        throw new Error(errorMessage)
      }
    } catch(error) {
      console.error('An unexpected error occurred:', error)
      throw new Error('An unexpected error occurred while making the POST request')
    }
  }
}

function findBySlug<K extends keyof ITables>(table: K, slug: string): ITables[K][number] | void {
  return tables[table].find((entry) => entry.slug === slug)
}

function findById<K extends keyof ITables>(table: K, id: number): ITables[K][number] | void {
  return tables[table].find((entry) => entry.id === id)
}