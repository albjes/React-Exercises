import CrudApi from "./components/CrudApi";
import { CrudApp } from "./components/CrudApp";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav />
      <h2 className="text-3xl w-full text-center bg-gray-200 text-gray-700 p-8">
        Ejercicios con React
      </h2>
      <CrudApi />
      <CrudApp />
    </div>
  );
}

export default App;
