import './App.css';
import logo from './imagenes/EstanciasWeb.png';
function App() {
  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
          className='logo-estancias'
          src={logo}
          alt='Logo Estancias'/>

      </div>
    </div>
  );
}

export default App;
