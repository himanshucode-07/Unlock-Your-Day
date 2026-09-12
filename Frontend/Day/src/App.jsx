import { AppProvider } from "./context/AppContext";
import LockedScreen from "./acts/Locked/LockedScreen";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

function AppContent() {
  const { currentAct } = useContext(AppContext);

  return (
    <AnimatePresence>
      {currentAct === "locked" && (
        <motion.div
          key="locked"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <LockedScreen />
        </motion.div>
      )}
      {currentAct === "unlocked" && (
        <motion.div
          key="unlocked"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <p>Unlocked! (placeholder)</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;