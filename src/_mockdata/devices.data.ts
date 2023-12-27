import { type IDeviceSchema } from '@/stores/schemas'

export const devices: IDeviceSchema[] = [
  {
    id: 1,
    slug: 'dialyzer-1',
    label: 'Диализатор-1',
    volume: -1,
    unit: '',
    categorySlug: 'dialyzers',
    groupSlug: 'dialyzers'
  },
  {
    id: 2,
    slug: 'dialyzer-2',
    label: 'Диализатор-2',
    volume: -1,
    unit: '',
    categorySlug: 'dialyzers',
    groupSlug: 'dialyzers'
  },
  {
    id: 3,
    slug: 'dialyzer-3',
    label: 'Диализатор-3',
    volume: -1,
    unit: '',
    categorySlug: 'dialyzers',
    groupSlug: 'dialyzers'
  },
  {
    id: 4,
    slug: 'dialyzer-4',
    label: 'Диализатор-4',
    volume: -1,
    unit: '',
    categorySlug: 'dialyzers',
    groupSlug: 'dialyzers'
  },
  {
    id: 5,
    slug: 'concentrator-1',
    label: 'Концентратор-1',
    volume: 10,
    unit: 'л',
    categorySlug: 'concentrators',
    groupSlug: 'concentrators'
  },
  {
    id: 6,
    slug: 'concentrator-2',
    label: 'Концентратор-2',
    volume: 15,
    unit: 'л',
    categorySlug: 'concentrators',
    groupSlug: 'concentrators'
  },
  {
    id: 7,
    slug: 'concentrator-3',
    label: 'Концентратор-3',
    volume: 20,
    unit: 'л',
    categorySlug: 'concentrators',
    groupSlug: 'concentrators'
  },
  {
    id: 8,
    slug: 'needle-1',
    label: 'Игла-1',
    volume: 10,
    unit: 'л',
    categorySlug: 'needles',
    groupSlug: 'needles'
  },
  {
    id: 9,
    slug: 'needle-2',
    label: 'Игла-2',
    volume: 15,
    unit: 'л',
    categorySlug: 'needles',
    groupSlug: 'needles'
  },
  {
    id: 10,
    slug: 'needle-3',
    label: 'Игла-3',
    volume: 20,
    unit: 'л',
    categorySlug: 'needles',
    groupSlug: 'needles'
  }
]
