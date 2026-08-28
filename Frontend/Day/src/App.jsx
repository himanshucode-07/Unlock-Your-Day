import Sandbox from "./Sandbox";
import { AppProvider } from "./context/AppContext";
function App() {
  return (
    <>
      <AppProvider>
        <Sandbox />
      </AppProvider>
    </>
  );
}

export default App;
