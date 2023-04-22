import '../src/App.css'
import { BrowserRouter,Routes, Route, } from 'react-router-dom'
import ItemDetailContainer from '../src/Components/ItemDetail/ItemDetailContainer'
import ItemListContainer from '../src/Components/ItemListContainer/ItemListContainer'
import NavBar from './Components/NavBar/NavBar'
import Cart from './Components/Cart/cart'
import Error from './Components/Error'
import React from 'react'
import CartProvider from './Context/CartContext';


function App() {
  return (
  <>
     <BrowserRouter>
     <CartProvider>
     <NavBar/> 
  <Routes>
  <Route path='/' element={<ItemListContainer />} />
  <Route path='/catalogo/:categoriaId' element={<ItemListContainer />}/>
  <Route path='/cart' element={<Cart />} />
  <Route path='/detalle/:detalleId' element={<ItemDetailContainer />}/>
    <Route path='/*' element={<Error />} />
  </Routes>
  </CartProvider>
  </BrowserRouter>
  </>
  );
  }
  export default App;
