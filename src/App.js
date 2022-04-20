import './App.css';
//pages
import Home from './pages/Home';
import Todos from './pages/Todos';
import Favoritos from './pages/Favoritos';
import JaVistos from './pages/JaVistos';
import Adicionados from './pages/Adicionados';
import Nav from './components/Nav/Nav';
import Destaques from './components/Destaques/Destaques';
import { dataAllMovies } from './dataAllMovies';
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
        <div className='container'>
          {console.log("APP.JS",dataAllMovies)}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="todos" element={<Todos />} />
            <Route path="favoritos" element={<Favoritos />} />
            <Route path="javistos" element={<JaVistos />} />
            <Route path="adicionados" element={<Adicionados />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div >
  );
}

export default App;
