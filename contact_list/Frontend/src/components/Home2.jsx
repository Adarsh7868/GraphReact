import React from 'react'
import { useQuery, gql, useMutation } from "@apollo/client";

const GET_REPOS = gql`
  query {
    viewer {
                            # //to show all repo's
      repositories(first: 100) {
        nodes {
          id
          name 

           }
      }
    }
  }
`;
const Home2 = () => {

  const { data, loading, error } = useQuery(GET_REPOS);
  console.log(data)
  return (
    <>
      <p>Home2</p>

      {data && data.viewer.repositories.nodes.map((repo) => (
        <div key={repo.id}>
            <p>{repo.name} </p>
        </div>
  )
  )}
    </>

)} 
export default Home2
