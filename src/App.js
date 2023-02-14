import logo from './logo.svg';
import './App.css';
// import Testimonio from './componentes/Testimonio.js';Aqui cambia la importacion, Testimonio va entre llaves
import { Testimonio } from './componentes/Testimonio';


function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros programadores</h1>
        <Testimonio/>
      </div>
    </div>
  );
}

export default App;

