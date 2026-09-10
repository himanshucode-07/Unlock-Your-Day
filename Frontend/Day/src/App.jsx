import Sandbox from "./Sandbox";
import { AppProvider } from "./context/AppContext";
import Button from "./components/ui/Button";
import SectionWrapper from "./components/ui/SectionWrapper";
import Card from "./components/ui/Card";
import LockedScreen from "./acts/Locked/LockedScreen";
function App() {
  return (
    <>
      <AppProvider>
        <Sandbox />
        <LockedScreen />
      </AppProvider>
    </>
  );
}
export default App;
