import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import Inicio from '../Inicio'
import Ofertas from '../Ofertas'
import Catalogo from '../Catalogo'
import Error from '../Error'
import Navbar from 'react-bootstrap/Navbar';
import  '../NavBar/NavBar.css';
import  CartWidget from '../../Components/CartWidget/CartWidget.js';

function NavBar() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        
      <div className='Container'>
      <img src={require('../../Assets/Logo.png')} 
      className="d-inline-block align-top logo"
       alt="logo de dips"/>

        
          <div className='btn-group'>

          <Link to="/" className='btn btn-success'>Inicio</Link>
          <Link to="/ofertas" className='btn btn-success'>Ofertas</Link>
          <Link to="/catalogo" className='btn btn-success'>Catalogo</Link>
          <CartWidget/>
          </div>
          

          <Routes>

              <Route path='/' exact element={<Inicio/>}/>
              <Route path='/ofertas' exact element={<Ofertas/>}/>
              <Route path='/catalogo' exact element={<Catalogo/>}/>
              <Route path='/*' exact element={<Error/>}/>    

          </Routes>
          
        </div>
       
      </Navbar>
    </>
  );
}

export default NavBar;
