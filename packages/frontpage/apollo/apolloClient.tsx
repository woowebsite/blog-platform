import { ApolloClient, InMemoryCache } from '@apollo/client';

export default function createApolloClient(initialState: any, ctx: any) {
  const cache = new InMemoryCache({
    typePolicies: {
      Album: {
        fields: {
          localName: {
            read(_, { variables }) {
              // Return the cached name, transformed to upper case
              // return name.toUpperCase();
              return 'xxx';
            },
          },
        },
      },
      Product: {
        keyFields: ['upc'],
      },
    },
  }).restore(initialState);

  return new ApolloClient({
    uri: process.env.GRAPHQL_URI, // must be absolute
    ssrMode: Boolean(ctx),
    cache,
  });
}
