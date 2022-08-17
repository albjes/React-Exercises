import ContactForm from "./components/ContactForm";
import CrudApi from "./components/CrudApi";
import { CrudApp } from "./components/CrudApp";
import Nav from "./components/Nav";
import SelectsAnidados from "./components/SelectsAnidados";
import SongsSearch from "./components/SongsSearch";

function App() {
  return (
    <div>
      <Nav />
      <h2 className="text-3xl w-full text-center bg-gray-200 text-gray-700 p-8">
        Ejercicios con React
      </h2>
      <ContactForm />
      <SelectsAnidados />
      <SongsSearch />
      <CrudApi />
      <CrudApp />
    </div>
  );
}

export default App;
