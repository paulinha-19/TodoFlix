import './App.css';
//pages
import Home from './pages/Home';
import Todos from './pages/Todos';
import Favoritos from './pages/Favoritos';
import JaVistos from './pages/JaVistos';
import Adicionados from './pages/Adicionados';
import Nav from './components/Nav/Nav';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="todos" element={<Todos />} />
          <Route path="favoritos" element={<Favoritos />} />
          <Route path="javistos" element={<JaVistos />} />
          <Route path="adicionados" element={<Adicionados />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
