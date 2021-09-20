import React, { useReducer } from "react";
import usersContext from "./usersContext";
import reducer from "./reducer";

const { Provider } = usersContext;

const initialState = {
	users: [],
};

const ContextProvider = ({ children }) => {
	const [state, dispatchUsers] = useReducer(reducer, initialState);

	return <Provider value={{ state, dispatchUsers }}>{children}</Provider>;
};

export default ContextProvider;