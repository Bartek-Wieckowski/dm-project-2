import { executeServerGraphql } from './client';
import { HotelCreateCommentDocument, HotelUpdateCommentStatusDocument } from '@/gql/graphql';

export const createComment = async (username: string, comment: string, hotelName: string) => {
  return await executeServerGraphql(HotelCreateCommentDocument, { username, comment, hotelName });
};
export const updateStatusComment = async (commentID: string) => {
  return await executeServerGraphql(HotelUpdateCommentStatusDocument, { commentID });
};
