import { createContext, useContext } from "react";
import { useReducer } from "react";

const AppContext = createContext(null);

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      if (state >= 3) {
        return state;
      } else {
        return state + 1;
      }
    case "DECREMENT":
      if (state === 0) {
        return state;
      } else {
        return state - 1;
      }
    default:
      return state;
  }
}

function DisplayNumber() {
  const {number, dispatch}= useContext(AppContext)
  return <h1>{number}</h1>;
}

function Sandbox() {
  const [number, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <div className="text-center mt-50px">
        <h1>number {number}</h1>

        <button
          disabled={number >= 3}
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          ➕ Increment
        </button>

        <button
          disabled={number === 0}
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          ➖ DECREMENT
        </button>

        <AppContext.Provider value={{ number, dispatch }}>
          <DisplayNumber />
        </AppContext.Provider>
      </div>
    </>
  );
}

export default Sandbox;
