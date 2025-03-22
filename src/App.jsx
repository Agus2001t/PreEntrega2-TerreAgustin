import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/Navbar'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <NavBarComponent/>
      <Routes>
        <Route path='/' element= {<ItemListContainer greeting="Bienvenido/a a Villa Pino Furniture Store"/>}/>
        <Route path='/category/:categoryId' element= {<ItemListContainer greeting= "Categoría: "/>}/>
        <Route path='/ofertas' element= {<ItemListContainer greeting= "Ofertas"/>}/>
        <Route path='/nosotros' element= {<ItemListContainer greeting= "¿Quiénes Somos?"/>}/>
        <Route path='/productos/:productId' element= {<ItemDetailContainer/>}/>
      </Routes>
      
      
    </BrowserRouter>
  )
}

export default App
