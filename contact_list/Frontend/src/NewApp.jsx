import React from "react";
import { Routes, Route } from "react-router-dom";
import Home2 from "./components/Home2";
import { client2 } from "./client/gitclient";
import { ApolloProvider } from "@apollo/client";
const NewApp = () => {
  return (
    <ApolloProvider client={client2}>
      <>
        <Routes>
          <Route path="/" element={<Home2 />} />
        </Routes>
      </>
    </ApolloProvider>
  );
};

export default NewApp;
