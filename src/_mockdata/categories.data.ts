import { type ICategorySchema } from '@/stores/schemas/category.schema'

export const categories: ICategorySchema[] = [
  {
    id: 1,
    slug: 'medication',
    label: 'Препараты'
  },
  {
    id: 2,
    slug: 'device',
    label: 'Изделия'
  },
  {
    id: 3,
    slug: 'injector',
    label: ''
  },
  {
    id: 4,
    slug: 'dialyzer',
    label: 'Диализаторы'
  },
  {
    id: 5,
    slug: 'concentrator',
    label: 'Концентраторы'
  },
  {
    id: 6,
    slug: 'needle',
    label: 'Иглы'
  },
  {
    id: 7,
    slug: 'needleType',
    label: 'Типы игл'
  },
  {
    id: 8,
    slug: 'catheter',
    label: 'Катетеры'
  },
  {
    id: 9,
    slug: 'catheterType',
    label: 'Типы катетеров'
  }
]
