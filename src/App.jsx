import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/Navbar'
import ItemListContainer from './components/ItemListContainer';


function App() {

  return (
    <>
      <NavBarComponent/>
      <ItemListContainer greeting="Bienvenido/a a Villa Pino Furniture Store"/>
    </>
  )
}

export default App
