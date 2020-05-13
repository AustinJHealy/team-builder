import React, { useState } from "react";

import logo from "./logo.svg";
import Form from "./Form";

import "./App.css";

function App() {
  /* const [memberToEdit, setMemberToEdit] = useState({
    id: "",
    memberName: "",
   /email: "",
    role: "",
  });
  */
  const [teamMembers, setTeamMembers] = useState([
    {
      id: "1",
      memberName: "Johnny Appleseed",
      email: "seedyJ@icloud.com",
      role: "Back-End",
    },
    {
      id: "2",
      memberName: "Joe Camel",
      email: "smokingjoe@camel.com",
      role: "Front-End",
    },
    {
      id: "3",
      memberName: "Willy Wonka",
      email: "candyman@wonka.com",
      role: "React Developer",
    },
  ]);

  const addTeamMemberHandler = (newMember) => {
    setTeamMembers([...teamMembers, newMember]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {teamMembers.map((item) => {
          //const editTeamMemberHandler = (item) => {
           //setMemberToEdit({ [item.keys]: [item.values] });
            //console.log(memberToEdit);
          
          return (
            <div className="member_container">
              <p>Name: {item.memberName}</p>
              <p>Email: {item.email}</p>
              <p>Role: {item.role}</p>
              <button
                className="edit_btn"
                //onClick={editTeamMemberHandler(item)}
              >
                Edit
              </button>
            </div>
          );
        })}
      </header>
      <Form addMember={addTeamMemberHandler} />
    </div>
  );
}

export default App;
