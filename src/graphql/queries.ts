import { HotelGetSingleDocument, HotelsGetAllDocument } from '@/gql/graphql';
import { executeServerGraphql } from './client';

export const getAllHotels = async () => {
  return await executeServerGraphql(HotelsGetAllDocument, { limit: 3 });
};
export const getSingleHotel = async (hotelId: string) => {
  return await executeServerGraphql(HotelGetSingleDocument, { id: hotelId });
};
