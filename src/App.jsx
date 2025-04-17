import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/Navbar'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import CartContainer from './components/CartContainer';
import Ofertas from './components/Ofertas';
import AcercaDe from './components/AcercaDe';
import ErrorPage from './components/ErrorPage';
import Checkout from './components/CheckOut';
import Footer from './components/Footer';

function App() {

  return (
    <BrowserRouter>
    <CartProvider>
      <NavBarComponent/>
      <Routes>
        <Route path='/' element= {<ItemListContainer greeting="Bienvenido/a a Villa Pino Furniture Store"/>}/>
        <Route path='/category/:categoryId' element= {<ItemListContainer greeting= "Categoría: "/>}/>
        <Route path='/ofertas' element= {<Ofertas greeting= "Ofertas"/>}/>
        <Route path='/nosotros' element= {<AcercaDe greeting= "¿Quiénes Somos?"/>}/>
        <Route path='/product/:productId' element= {<ItemDetailContainer/>}/>
        <Route path='/cart' element= {<CartContainer greeting= "Carrito 🛒"/>}/>
        <Route path='/checkout' element= {<Checkout/>}/>
        <Route path='*' element= {<ErrorPage/>}/>
      </Routes>
      <Footer/>
    </CartProvider>
    </BrowserRouter>
  )
}

export default App
