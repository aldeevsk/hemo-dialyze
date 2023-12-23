import { type ISchema } from '../schemas/schema'
import { useStore } from '..'

interface IFormOtions {
    dialyzer: {
        programs: ISchema[]
        dialyzers: ISchema[]
        concentrators: ISchema[]
    }
}

export function getOptions(store: ReturnType<typeof useStore>, substore: keyof ReturnType<typeof useStore>, optionsName: string) {
    if(optionsName === 'programs') return store.procedures.filterBy({ key: 'categorySlug', value: 'program' })
    if(optionsName === 'dialyzers') return store.devices.filterBy({ key: 'groupSlug', value: 'dialyzer' })
    if(optionsName === 'concentrators') return store.devices.filterBy({ key: 'groupSlug', value: 'concentrator' })

    store[substore]
}
