// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Image, Member, Cohort } = initSchema(schema);

export {
  Image,
  Member,
  Cohort
};