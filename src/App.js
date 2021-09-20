import React, { useEffect, useContext, useState } from 'react';
import './App.css';
import CreateUser from './components/CreateUser';
import DisplayUsers from './components/DisplayUsers';
import usersContext from './context/usersContext/usersContext';

const App = () => {
  const userState = useContext(usersContext);
  const { dispatchUsers } = userState;

  const [rendering, setRendering] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const doFetch = async () => {
      const response = await fetch("./data.json");
      const data = await response.json();
      if (isMounted) {
        dispatchUsers({ type: "fetchUsers", payload: data });
        setRendering(true);
      }
    };
    try {
      doFetch();
    } catch (err) {
      console.log("Unable to fetch config file :", err);
    }

    return () => {
      isMounted = false;
    };
  }, [dispatchUsers]);

  if (rendering) {
    return (
      <div className="App">
        <DisplayUsers />
        <CreateUser />
      </div>
    );
  }
  return null
}

export default App;
