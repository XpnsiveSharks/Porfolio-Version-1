import Contents from '../src/components/layout/Contents'
import Navbar from '../src/components/layout/Navbar';
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Contents>
        <div className="h-50 w-50 flex items-center justify-center bg-amber-600">
          1
        </div>
        <div className="h-50 w-50 flex items-center justify-center bg-amber-600">
          2
        </div>
        <div className="h-50 w-50 flex items-center justify-center bg-amber-600">
          3
        </div>
      </Contents>
    </>
  );
}
export default App;
