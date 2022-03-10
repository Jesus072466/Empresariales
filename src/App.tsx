import React from 'react';
import './App.css';
import PersonList from './Components/PersonList';
import CreatePersonForm from './Components/CreatePersonForm';
    
    function App() {
      return (
        <div className="App">
          <CreatePersonForm />
          <hr />
          <PersonList />          
        </div>
      );
    }

export default App;
