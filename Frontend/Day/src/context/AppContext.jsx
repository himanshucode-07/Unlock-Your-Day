import { createContext } from "react";
import { useReducer } from "react";

export const AppContext = createContext(null);

function ActReducer(state, action) {
  switch (action.type) {
    case "UNLOCK":
      return "unlocked";
    default:
      return state;
  }
}

export function AppProvider({ children }) {
    const [currentAct, dispatch]= useReducer(ActReducer, "locked");

    return (
        <AppContext.Provider value = {{currentAct, dispatch}}>
        {children}
        </AppContext.Provider>

    )

}
