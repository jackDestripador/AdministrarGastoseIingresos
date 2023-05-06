import { createContext, useContext, useReducer } from "react";
import AppReducer from "./AppReducer";
AppReducer;
const initialState = {
  transaction: [],
};

export const Context = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <Context.Provider
      value={{
        transaction: state.transaction,
      }}
    >
      {children}
    </Context.Provider>
  );
};
