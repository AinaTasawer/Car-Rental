import { type SchemaTypeDefinition } from 'sanity'
import Car from './car'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Car],
}
