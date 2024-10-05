import './App.css';
import Boton from './componentes/Boton1';
import logo from './imagenes/EstanciasWeb.png';


function App() {

  const manejarClic = () => {
      console.log("clic");
  }

  const reiniciarContador = () => {
    console.log("Reiniciar")
  }

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
          className='logo-estancias'
          src={logo}
          alt='Logo Estancias'/>

      </div>
      <div className='contenedor-principal'>
      <Boton
        texto='clic'
        esBotonDeClic={true}
        manejarClic={manejarClic}/>
        <Boton 
        texto='Reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
