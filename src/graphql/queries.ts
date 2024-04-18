import { HotelsGetAllDocument } from '@/gql/graphql';
import { executeServerGraphql } from './client';

export const getAllHotels = async () => {
  return await executeServerGraphql(HotelsGetAllDocument, { limit: 3 });
};
