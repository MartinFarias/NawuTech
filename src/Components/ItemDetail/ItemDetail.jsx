import React, {useState} from "react";
import { useCartContext} from '../../Context/CartContext'
import '../ItemDetail/ItemDetailCountainer.css'
import ItemCount from '../count/count';
import {Link} from 'react-router-dom'

export const ItemDetail = ({data}) => {
    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext();
        
    const onAdd = (quantity) => {
       setGoToCart(true);
       addProduct(data, quantity)
      }
    
    return (
        <div className="container">
        <div className="detail">
            <img className='detail_image' src={data.imagen} alt=""/>
            <div className="content">
                <h1>{data.nombre}</h1>
                <p>{data.caracteristicas}</p>
                <h2>{data.precio}</h2>
                {
                  goToCart 
                   ? <Link to='/cart'> Terminar Compra</Link>
                   : <ItemCount initial={0} stock={5} onAdd={onAdd}/>
                  }
                
            </div>
        </div>
        </div>
        
    );
}

export default ItemDetail;