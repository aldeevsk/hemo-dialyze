import { type IGroupSchema } from '@/stores/schemas'

export const groups: IGroupSchema[] = [
  {
    id: 1,
    slug: 'needleType-1',
    label: 'Тип иглы 1',
    categorySlug: 'needleTypes'
  },
  {
    id: 2,
    slug: 'needleType-2',
    label: 'Тип иглы 2',
    categorySlug: 'needleTypes'
  },
  {
    id: 3,
    slug: 'catheter-foley',
    label: 'Катетер Фолея',
    categorySlug: 'catheterTypes'
  },
  {
    id: 4,
    slug: 'catheter-maleko',
    label: 'Катетер Малеко',
    categorySlug: 'catheterTypes'
  },
  {
    id: 5,
    slug: 'catheter-peccer',
    label: 'Катетер Пеццера',
    categorySlug: 'catheterTypes'
  },
  {
    id: 6,
    slug: 'catheter-timann',
    label: 'Катетер Тиманна',
    categorySlug: 'catheterTypes'
  },
  {
    id: 7,
    slug: 'catheter-nelaton',
    label: 'Катетер Нелатона',
    categorySlug: 'catheterTypes'
  }
]
