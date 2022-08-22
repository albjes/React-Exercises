import ContactForm from "./components/ContactForm";
import CrudApi from "./components/CrudApi";
import { CrudApp } from "./components/CrudApp";
import Header from "./components/Header";
import Modals from "./components/Modals";
import Nav from "./components/Nav";
import NewExercise from "./components/NewExercise";
import SelectsAnidados from "./components/SelectsAnidados";
import SongsSearch from "./components/SongsSearch";

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <NewExercise msg="MODALES">
        <Modals />
      </NewExercise>
      <NewExercise msg="FORMULARIO DE CONTACTO">
        <ContactForm />
      </NewExercise>
      <NewExercise msg="SELECTS ANIDADOS">
        <SelectsAnidados />
      </NewExercise>
      <NewExercise msg="SONGS SEARCH">
        <SongsSearch />
      </NewExercise>
      <NewExercise msg="CRUD API JSON SERVER">
        <CrudApi />
      </NewExercise>
      <NewExercise msg="CRUD APP API FALSE">
        <CrudApp />
      </NewExercise>
    </div>
  );
}

export default App;
