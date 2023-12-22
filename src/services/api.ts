import { categories, products, type IProductSchema } from "@/_mockdata"
import { type ISchema } from "@/stores/schemas/schema"
import { type ICategorySchema } from "@/stores/schemas/category.schema"
import { type IMedicationSchema } from "@/stores/schemas/medication.schema"

interface IData {
    categories: ICategorySchema[]
    products: IProductSchema[]
}

const data: IData = {
  categories,
  products,
}

interface IGetOptions {
    slug?: string | undefined
    id?: number | undefined
}

export const api = {
    get<K extends keyof IData>(table: K): IData[K] | void {
        return data[table]
    },
    findBy<K extends keyof IData>(table: K, {slug=undefined, id=undefined}: IGetOptions): IData[K][number] | void {
        if(slug) return findBySlug(table, slug)
        if(id) return findById(table, id)
    },
    filterBy<K extends keyof IData>(
      table: K,
      { by, value }: { by: keyof IData[K][number]; value: string }
    ): IData[K][number][] {
      return data[table].filter((p) => p[by] === value) as IData[K][number][]
    },
}

function findBySlug<K extends keyof IData>(table: K, slug: string): IData[K][number] | void {
  return data[table].find((entry) => entry.slug === slug)
}

function findById<K extends keyof IData>(table: K, id: number): IData[K][number] | void {
  return data[table].find((entry) => entry.id === id)
}
