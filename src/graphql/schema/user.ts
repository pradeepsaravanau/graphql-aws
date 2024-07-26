export const userType = `#graphql
  type User {
    user_id: String
    user_name: String
    created_by_id: String
    books_borrowed_count: Int
    email: String
  }

  type Mutation {
    createUser(user: UserInput) : User
  }
  input UserInput {
    email: String!,
    password: String!,
    user_name: String!,
    phone_number: String!
  },

  type Query {
    user(id: String!): User
    users: [User]
  }
`;