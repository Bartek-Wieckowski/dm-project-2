/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation HotelCreateComment($attribution: String, $comment: String, $hotelName: String) {\n  createReview(\n    data: {attribution: $attribution, comment: $comment, hotel: {connect: {name: $hotelName}}}\n  ) {\n    id\n  }\n}": types.HotelCreateCommentDocument,
    "query HotelGetAllComments($hotelName: String) {\n  hotel(where: {name: $hotelName}) {\n    reviews {\n      comment\n      attribution\n      createdAt\n      id\n    }\n  }\n}": types.HotelGetAllCommentsDocument,
    "query HotelGetSingle($id: ID) {\n  hotel(where: {id: $id}) {\n    name\n    description\n    phone\n    rooms\n    photos {\n      id\n      url\n    }\n  }\n}": types.HotelGetSingleDocument,
    "mutation HotelUpdateCommentStatus($commentID: ID) {\n  publishReview(where: {id: $commentID}) {\n    id\n  }\n}": types.HotelUpdateCommentStatusDocument,
    "query HotelsGetAll($limit: Int!) {\n  hotels(first: $limit) {\n    description\n    destinations {\n      name\n      hotels {\n        name\n      }\n      location {\n        distance(from: {latitude: 1.5, longitude: 1.5})\n        latitude\n        longitude\n      }\n      id\n    }\n    id\n    photos {\n      fileName\n      url\n    }\n    name\n    rooms\n  }\n}": types.HotelsGetAllDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation HotelCreateComment($attribution: String, $comment: String, $hotelName: String) {\n  createReview(\n    data: {attribution: $attribution, comment: $comment, hotel: {connect: {name: $hotelName}}}\n  ) {\n    id\n  }\n}"): typeof import('./graphql').HotelCreateCommentDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query HotelGetAllComments($hotelName: String) {\n  hotel(where: {name: $hotelName}) {\n    reviews {\n      comment\n      attribution\n      createdAt\n      id\n    }\n  }\n}"): typeof import('./graphql').HotelGetAllCommentsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query HotelGetSingle($id: ID) {\n  hotel(where: {id: $id}) {\n    name\n    description\n    phone\n    rooms\n    photos {\n      id\n      url\n    }\n  }\n}"): typeof import('./graphql').HotelGetSingleDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation HotelUpdateCommentStatus($commentID: ID) {\n  publishReview(where: {id: $commentID}) {\n    id\n  }\n}"): typeof import('./graphql').HotelUpdateCommentStatusDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query HotelsGetAll($limit: Int!) {\n  hotels(first: $limit) {\n    description\n    destinations {\n      name\n      hotels {\n        name\n      }\n      location {\n        distance(from: {latitude: 1.5, longitude: 1.5})\n        latitude\n        longitude\n      }\n      id\n    }\n    id\n    photos {\n      fileName\n      url\n    }\n    name\n    rooms\n  }\n}"): typeof import('./graphql').HotelsGetAllDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
