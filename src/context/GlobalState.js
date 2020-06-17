import React, { createContext, useReducer } from "react";
import AppReducer from "./Reducer";

const initialState = {
  transactions: [
    { id: 1, text: "flower", amount: -30 },
    { id: 2, text: "profit", amount: 300 },
  ]
};
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider value={{ transactions: state.transactions }}>
      {children}
    </GlobalContext.Provider>
  );
};

