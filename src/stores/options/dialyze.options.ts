import { type ISchema } from '../schemas/schema'

export interface IDialyzeOptions {
    programs: ISchema[]
    injectionTypes: ISchema[]
}

export const dialyzeOptions: IDialyzeOptions = {
  programs: [
    {
      id: 1,
      slug: 'hd',
      label: 'HD'
    },
    {
      id: 2,
      slug: 'hdf',
      label: 'HDF'
    },
    {
      id: 3,
      slug: 'uf',
      label: 'UF'
    },
  ],
  injectionTypes: [
    {
        id: 1,
        slug: 'needle',
        label: 'Игла'
    },
    {
        id: 2,
        slug: 'catheter',
        label: 'Катетер'
    },
  ]
}
