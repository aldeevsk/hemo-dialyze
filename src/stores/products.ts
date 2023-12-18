import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useProductsStore = defineStore('products', () => {
    // const products = ref<IProduct[]>([])

    // function all(): IProduct[] {
    //     return products.value
    // }

    // function filterBy({ categorySlug = '' }): IProduct[] | void {
    //     const result = products.value.filter((p) => p.categorySlug === categorySlug)
    //     return result
    // }

    // function fetchData(): void {
    //     const result = api.getBy<IProduct[]>({ table: 'products' })
    //     if (!result) return
    //     products.value = result
    // }

    // fetchData()

    // return { all, fetchData, filterBy }
})
