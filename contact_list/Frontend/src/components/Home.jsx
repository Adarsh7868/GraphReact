import React, { useState } from 'react';
import { useQuery, gql, useMutation } from "@apollo/client";
import "./Home.css";
const GET_CONTACTS = gql`
  query {
    FindAlluser {
      id
      name
      phone
    }
  }
`;

const CREATE_CONTACT = gql`
  mutation createUser($data: CreateUserInput!) {
    createUser(createUserInput: $data) {
      id
      name
      phone
    }
  }
`;

const UPDATE_CONTACT = gql`
  mutation updateUser($id: String!, $updatedata: UpdateUserInput!) {
    updateUser(id: $id, updateUserInput: $updatedata) {
      name
      phone
    }
  }
`;

const DELETE_CONTACT = gql`
  mutation delete($id:String!){
    removeUser(id:$id){
      id,name,phone
    }
  }
`;

const Home = () => {
  const [inputText1, setInputText1] = useState("");
  const [inputText2, setInputText2] = useState("");

    // getting user data
  const { data, loading, error } = useQuery(GET_CONTACTS);
      // creating new user
  const [createContact] = useMutation(CREATE_CONTACT, {
    refetchQueries: [{ query: GET_CONTACTS }],
  });
                 // updating user data
  const [updateContact] = useMutation(UPDATE_CONTACT, {
    refetchQueries: [{ query: GET_CONTACTS }],
  });

    // deleting user data
  const [deleteContact] = useMutation(DELETE_CONTACT, {
    refetchQueries: [{ query: GET_CONTACTS }],
  });

  // adding new items
  const addList = () => {
    if (!inputText1 || !inputText2) {
      alert("Please fill all the fields");
      return;
    }

    createContact({
      variables: {
        data: {
          name: inputText1,
          phone: inputText2,
        },
      },
    });

    setInputText1("");
    setInputText2("");
  };

  // updating list by id
  const updateList = (id, newName, newPhone) => {
    updateContact({
      variables: {
        id: id,
        updatedata: {
          name: newName,
          phone: newPhone,
        },
      },
    });
  };

  // deleting list by index
  const deleteList = (id) => {
    deleteContact({
      variables: {
        id: id,
      },
    });
    
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      {/* ... Your existing JSX code for input fields ... */}
           {/* Input fields for adding new contact */}
      <div className="input_container">
        <input
          type="text"
          placeholder="Full Name"
          value={inputText1}
          onChange={(e) => {
            setInputText1(e.target.value);
          }}
        />
        <br />
        <br />

        <input
          type="number"
          placeholder="Contact No."
          value={inputText2}
          onChange={(e) => {
            setInputText2(e.target.value);
          }}
        />

        <br />
        <br />

        <button
          type="submit"
          className="btn"
          onClick={() => {
            addList();
            setInputText1("");
            setInputText2("");
          }}
        > ADD
        </button>

        <br />
        <hr style={{ width: "360px", marginBottom: "px" }} />
      </div>
      {/* users contact list  */}

                             <h1>Contact List</h1>
<div className='list_center'>
      <div  >
        {data && data.FindAlluser.map((list) => (
          <div key={list.id} className="listBorder">
            <ul>

              {list.name} {list.phone}
              {/* update icon */}
              <i
                className="fa-sharp fa-solid fa-pen"
                style={{ fontSize: "20px", marginLeft: "220px" }}
                
                onClick={() => {
                  const newName = prompt("Enter new name", list.name);
                  const newPhone = prompt("Enter new phone", list.phone);
                  if (newName && newPhone) {
                    updateList(list.id, newName, newPhone);
                  }
                }}
              ></i>
              {/* delete icon */}
              <i
                className="fa-sharp fa-solid fa-trash"
                style={{ fontSize: "20px", marginLeft: "25px" }}

                onClick={() => {
                  deleteList(list.id);
                }}
              ></i>
            </ul>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default Home;
