import React from 'react';
import './App.css';
import PersonList from './Components/PersonList';
import CreatePersonForm from './Components/CreatePersonForm';
import UpdatePersonForm from './Components/UpdatePersonForm';
    
    function App() {
      return (
        <div className="App">      
          <h1>Lista de objetos</h1>
          <p>----------</p>
          <PersonList />
          <hr />
          <h1>Crear Objeto</h1>
          <CreatePersonForm />
          <hr />
          <h1>Actualizar Objeto</h1>
          <UpdatePersonForm /> 
        </div>
      );
    }

export default App;
