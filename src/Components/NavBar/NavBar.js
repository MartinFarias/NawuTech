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
        
      <div className='Container' id="navbar">
        <div className="row">
        <div className="col-4">
        <div className="contaiber-fluid">
      <Link className="navbar-brand aline-item-start" to={"/"}><img src={require('../../Assets/Logo.png')} 
      className="d-inline-block align-top logo"
       alt="logo de dips"/></Link>
      <button className="navbar-toggler" type="button" data-bs-toogle="collapse" data-bs-target="#NavBar">
        <span className="navbar-toggle-icon"></span>
        </button>

        
         <div>
            <ul>
              <li><Link to="/" className='btn btn-success'>Inicio</Link></li>
              <li><Link to="/ofertas" className='btn btn-success'>Ofertas</Link></li>
              <li><Link to="/catalogo" className='btn btn-success'>Catalogo</Link></li>
              </ul>
          </div>
          

          <Routes>

              <Route path='/' exact element={<Inicio/>}/>
              <Route path='/ofertas' exact element={<Ofertas/>}/>
              <Route path='/catalogo' exact element={<Catalogo/>}/>
              <Route path='/*' exact element={<Error/>}/>    

          </Routes>
          </div>
          </div>
        </div>
        </div>
<div className='col-6 d.flex justify-content-end aline-item'>
          <CartWidget/></div>
        
       
      </Navbar>
    </>
  );
}

export default NavBar;
