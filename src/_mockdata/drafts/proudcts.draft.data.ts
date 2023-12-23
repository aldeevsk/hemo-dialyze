interface ISchema {
  id: number
  slug: string
  label: string
}

interface ICategorySchema extends ISchema {}

interface IProductSchema extends ISchema {
  categorySlug: string
}

// interface IMedicationSchema extends IProductSchema {
//   volume: number
//   unit: string
//   dosages: number[]
//   groupSlug: string
//   categorySlug: 'medication'
// }

// interface IDeviceSchema extends IProductSchema {
//     categorySlug: 'device'
// }
