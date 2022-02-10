// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Unidad, Cliente, Turn } = initSchema(schema);

export {
  Unidad,
  Cliente,
  Turn
};