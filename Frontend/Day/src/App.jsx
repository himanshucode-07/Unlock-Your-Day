import Sandbox from "./Sandbox";
import { AppProvider } from "./context/AppContext";
import Button from "./components/ui/Button";
import SectionWrapper from "./components/ui/SectionWrapper";
import Card from "./components/ui/Card";
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
