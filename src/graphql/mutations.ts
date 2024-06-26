import { executeServerGraphql } from './client';
import { CreateProfileMutationDocument, HotelCreateCommentDocument, HotelUpdateCommentStatusDocument } from '@/gql/graphql';

export const createComment = async (attribution: string, comment: string, hotelName: string) => {
  return await executeServerGraphql(HotelCreateCommentDocument, { attribution, comment, hotelName });
};
export const updateStatusComment = async (commentID: string) => {
  return await executeServerGraphql(HotelUpdateCommentStatusDocument, { commentID });
};

export const createUserProfile = async (userProfileName: string, UserProfilePassword: string, userProfileAvatar: string) => {
  return await executeServerGraphql(CreateProfileMutationDocument, { userProfileName, UserProfilePassword, userProfileAvatar });
};