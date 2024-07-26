import { userResolver } from "./user";

export const resolvers = {
  Query: {
    ...userResolver.query,
  },
  Mutation: {
    ...userResolver.mutations,
  }
};