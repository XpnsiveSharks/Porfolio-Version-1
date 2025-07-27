import { useTheme } from "./hooks/useTheme";
import ThemeTransition from "./components/ui/ThemeTransition";
import Navbar from "../src/components/layout/Navbar";
import Contents from "./components/layout/Contents";
function App() {
  const { isToggling } = useTheme();
  return (
    <div className="min-h-screen bg-custom-background dark:bg-custom-backgroundLight transition-colors duration-1000 overflow-hidden">
      <ThemeTransition isToggling={isToggling} />
      <Navbar />
      <Contents>
        
      </Contents>
    </div>
  );
}
export default App;
