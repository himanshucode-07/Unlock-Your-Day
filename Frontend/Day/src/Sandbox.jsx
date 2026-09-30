import { createContext, useContext, useEffect } from "react";
import { useReducer } from "react";
import { motion, AnimatePresence } from "motion/react";
import { gsap } from "gsap"

import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

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
  const { number } = useContext(AppContext);
  return <h1>{number}</h1>;
}

function Sandbox() {
  const [number, dispatch] = useReducer(reducer, 0);

  useEffect(() => {
    gsap.from("#test-box", { opacity: 0, x: -100, duration: 1 });
  }, []);

  return (
    <>

          <div id="test-box">GSAP Test</div>
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

      <AnimatePresence>
  {number === 0 && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      Zero hai abhi!
    </motion.div>
  )}
</AnimatePresence>


    </>
  );
}

export default Sandbox;
