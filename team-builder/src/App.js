import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  const [teamMembers, setTeamMembers] = useState([
    {
    name: "Johnny Appleseed",
    email: "seedyJ@icloud.com",
    role: "Back-End"
    },
    {
    name: "Joe Camel",
    email: "smokyhumps@camel.com",
    role: "Front-End"
    },
    {
    name: "Willy Wonka",
    email: "candymancandymancandyman@wonka.com", 
    role: "React Developer"
    }

  
  ]);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {
        teamMembers.map((item) => {
          return(
          <div className="member_container">
            <p>
             Name: {item.name}
            </p>
            <p>
             Email: {item.email}
           </p>
            <p>
             Role: {item.role}
            </p>
          </div>
          )        
        })
        
        }
      </header>
    </div>
  );
}

export default App;
