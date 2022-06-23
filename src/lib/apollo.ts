import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client  = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4q2omf12v5801xl5af6bg8d/master',
  cache: new InMemoryCache()
})