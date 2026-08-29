import Sandbox from "./Sandbox";
import { AppProvider } from "./context/AppContext";
function App() {
  return (
    <>
      <AppProvider>
        <Sandbox />
      </AppProvider>
      <div className="bg-accent p-10">test</div>
    </>
  );
}

export default App;
