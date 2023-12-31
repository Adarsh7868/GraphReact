import { HttpLink, ApolloClient, InMemoryCache } from "@apollo/client";



const httpLink = new HttpLink({
    uri: "http://localhost:5000/graphql",
});

export const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});