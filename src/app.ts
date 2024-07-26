import * as dotenv from "dotenv";
// import { DatabaseLoader } from "./loaders/database.loader";
// import {ApolloGraphqlServerLoader} from "./loaders/apollo.graphql.loader";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { ApolloServer } from "apollo-server-lambda";

import { typeDefs } from "./graphql/schema/index";
import { resolvers } from "./graphql/resolvers/index";
// import mongoose from "mongoose";
dotenv.config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
  context: async () => {
    // console.log("connecting in the db ");
    // if(mongoose.connection.readyState === 0)
    //  await DatabaseLoader.init();
    // else
    //   console.log("may be already registered");
    // console.log("connection establisthed");
  },
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
});

// const url = await startStandaloneServer(server, {
//   listen: { port: 4000 },
// });

exports.graphqlHandler = server.createHandler();
