// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { CardData, Groups, Profile, Home } = initSchema(schema);

export {
  CardData,
  Groups,
  Profile,
  Home
};