import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { client } from "./client/apolloClient";
import { ApolloProvider } from "@apollo/client";
const App = () => {
  return (
    <ApolloProvider client={client}>
      <>
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          {/* <Route path="/gitapi" element={<Home/>} />           */}
        </Routes>
      </>
    </ApolloProvider>
  );
};

export default App;
