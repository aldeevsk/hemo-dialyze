import { type ISchema } from '@/stores/schemas/schema'

export interface IProductSchema extends ISchema {
    volume: number
    unit: string
    dosages: number[]
    categorySlug: string
}

export const products: IProductSchema[] = [
    {
        id: 1,
        slug: 'hd',
        label: 'HD',
        categorySlug: 'program',
        volume: 0,
        unit: '',
        dosages: []
    },
    {
        id: 2,
        slug: 'hdf',
        label: 'HDF',
        categorySlug: 'program',
        volume: 0,
        unit: '',
        dosages: []
    },
    {
        id: 3,
        slug: 'uf',
        label: 'UF',
        categorySlug: 'program',
        volume: 0,
        unit: '',
        dosages: []
    },
    {
        id: 4,
        slug: 'dialyzer-1',
        label: 'Диализатор-1',
        categorySlug: 'dialyzer',
        volume: 0,
        unit: '',
        dosages: []
    },
    {
        id: 5,
        slug: 'dialyzer-2',
        label: 'Диализатор-2',
        categorySlug: 'dialyzer',
        volume: 0,
        unit: '',
        dosages: []
    },
    {
        id: 6,
        slug: 'dialyzer-3',
        label: 'Диализатор-3',
        categorySlug: 'dialyzer',
        volume: 0,
        unit: '',
        dosages: []
    },
    {
        id: 7,
        slug: 'concentrator-1',
        label: 'Концентратор-1',
        categorySlug: 'concentrator',
        volume: 3,
        unit: 'л',
        dosages: []
    },
    {
        id: 8,
        slug: 'concentrator-2',
        label: 'Концентратор-2',
        categorySlug: 'concentrator',
        volume: 5,
        unit: 'л',
        dosages: []
    },
    {
        id: 9,
        slug: 'concentrator-3',
        label: 'Концентратор-3',
        categorySlug: 'concentrator',
        volume: 10,
        unit: 'л',
        dosages: []
    },
    {
        id: 10,
        slug: 'needle-1',
        label: 'Игла-1',
        categorySlug: 'needle',
        volume: 0,
        unit: '',
        dosages: []
    },
    {
        id: 11,
        slug: 'needle-2',
        label: 'Игла-2',
        categorySlug: 'needle',
        volume: 0,
        unit: '',
        dosages: []
    },
    {
        id: 12,
        slug: 'needle-3',
        label: 'Игла-3',
        categorySlug: 'needle',
        volume: 0,
        unit: '',
        dosages: []
    },
    {
        id: 13,
        slug: 'needle',
        label: 'Игла',
        categorySlug: 'injectionType',
        volume: 0,
        unit: '',
        dosages: []
    },
    {
        id: 14,
        slug: 'catheter',
        label: 'Катетер',
        categorySlug: 'injectionType',
        volume: 0,
        unit: '',
        dosages: []
    },
    {
        id: 15,
        slug: 'catheter',
        label: 'Катетер',
        categorySlug: 'injectionType',
        volume: 0,
        unit: '',
        dosages: []
    },
    {
        id: 16,
        slug: 'needleType-1',
        label: 'Тип иглы 1',
        categorySlug: 'needleType',
        volume: 0,
        unit: '',
        dosages: []
    },
    {
        id: 17,
        slug: 'needleType-3',
        label: 'Тип иглы 3',
        categorySlug: 'needleType',
        volume: 0,
        unit: '',
        dosages: []
    },
    {
        id: 18,
        slug: 'needleType-3',
        label: 'Тип иглы 3',
        categorySlug: 'needleType',
        volume: 0,
        unit: '',
        dosages: []
    },
]
