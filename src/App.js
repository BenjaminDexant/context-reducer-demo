import React from 'react';
import './App.css';
import CreateUser from './components/CreateUser';
import FilterUsers from './components/FilterUsers';
import DisplayUsers from './components/UserCard';

const App = () => {

  return (
    <div className="App">
      <DisplayUsers />
      <FilterUsers />
      <CreateUser/>
    </div>
  );
}

export default App;
