import { type IGroupSchema } from '@/stores/schemas'

export const groups: IGroupSchema[] = [
    {
        id: 1,
        slug: 'needle',
        label: 'Игла',
        categorySlug: 'injectionType'
    },
    {
        id: 2,
        slug: 'catheter',
        label: 'Катетер',
        categorySlug: 'injectionType'
    },
]
