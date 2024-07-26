// import { typeDefs } from "../graphql/schema/index";
// import { resolvers } from "../graphql/resolvers/index";


// // import { ApolloServer } from "@apollo/server";
// import { ApolloServer } from "apollo-server-lambda";

// const {
//   ApolloServerPluginLandingPageLocalDefault
// } = require('apollo-server-core');
// export class ApolloGraphqlServerLoader {
//   static  init(){
// // typedefs are used by apollo server to structure
// // resolvers are used to manipulate the actual data -> handle the data
// const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//     csrfPrevention: true,
//      cache: 'bounded',
//     // context: ({ event, context, express }) => ({
//     //   headers: event.headers,
//     //   functionName: context.functionName,
//     //   event,
//     //   context,
//     //   expressRequest: express.req,
//     // }),
//     plugins: [
//       ApolloServerPluginLandingPageLocalDefault({ embed: true }),
//     ],  
//   });
  
//   // const url = await startStandaloneServer(server, {
//   //   listen: { port: 4000 },
//   // });
  
//   return server.createHandler();
//   }
// }





  