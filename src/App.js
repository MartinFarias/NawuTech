import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import NavBar from '../src/Components/NavBar/NavBar.js'
import '../src/App.css'
import {Routes, Route,} from 'react-router-dom'
import Inicio from '../src/Components/Inicio'
import Ofertas from '../src/Components/Ofertas'
import Catalogo from '../src/Components/Catalogo'
import Error from '../src/Components/Error'
import 'bootstrap/dist/css/bootstrap.min.css'
import Item from './Components/ItemList/Item'

function App() {
  return (
    <div className="App">
    <header>
      <BrowserRouter>
      <NavBar/>
      <Routes>
     <Route path={'/'} exact element={<Inicio/>}/>
     <Route path={'/ofertas'} exact element={<Ofertas/>}/>
     <Route path={'/catalogo'} exact element={<Catalogo/>}/>
     <Route path={'/*'} exact element={<Error/>}/>    
     </Routes>
      </BrowserRouter>
      </header>
       <div className='row'>
        <Item/>
        </div>
         </div>
  );
}
export default App;
