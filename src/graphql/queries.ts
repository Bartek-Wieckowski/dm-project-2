import { GetUserByUsernameDocument, HotelGetAllCommentsDocument, HotelGetSingleDocument, HotelsGetAllDocument } from '@/gql/graphql';
import { executeServerGraphql } from './client';

export const getAllHotels = async () => {
  return await executeServerGraphql(HotelsGetAllDocument, { limit: 3 });
};
export const getSingleHotel = async (hotelId: string) => {
  return await executeServerGraphql(HotelGetSingleDocument, { id: hotelId });
};
export const getHotelAllComments = async (hotelName: string) => {
  return await executeServerGraphql(HotelGetAllCommentsDocument, { hotelName: hotelName });
};
export const getProfileByUsername = async (username: string) => {
  return await executeServerGraphql(GetUserByUsernameDocument, { username: username });
};

// export const getProfileByUsername = async (username: string) => {
//   try {
//     const response = await executeServerGraphql(GetUserByUsernameDocument, { username: username });
//     console.log('GraphQL Response:', response);

//     if (response && response.userProfiles) {
//       const user = response.userProfiles.find((profile) => profile.userProfileName === username);
//       console.log('Found user:', user);
//       return user;
//     }

//     console.log('User not found in GraphQL response.');
//     return null;
//   } catch (error) {
//     console.error('Error fetching user profile:', error);
//     throw new Error('Error');
//   }
// };
