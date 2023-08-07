import { HttpLink, ApolloClient, InMemoryCache } from "@apollo/client";



const httpLink = new HttpLink({
    uri: "https://api.github.com/graphql",
});

export const client2 = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});