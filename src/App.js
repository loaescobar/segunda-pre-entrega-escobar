import NavBar from './componentes/NavBar';
import './App.css';
import ItemListContainer from './componentes/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting='Bienvenidos a DISCORDIA Indumentaria'/>
    </div>
  );
}

export default App;
