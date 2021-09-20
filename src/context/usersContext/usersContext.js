import React from "react";

const initialState = {
	users: [],
};

const usersContext = React.createContext(initialState);

export default usersContext;