import React from "react";
import { Link } from 'react-router-dom'
import { useCartContext } from '../../Context/CartContext'
import ItemCart from '../../Components/ItemCart/ItemCart'
import '../Cart/Cart.css'

const Cart = () => {
    const { cart, totalPrice } = useCartContext();

if (cart.length === 0) {
    return (
        <div className="changuito neon">
        <p>Aun No Agrego Nada al Carrito!</p>
        <Link to= '/'><h2>Volver al Catalogo</h2></Link>
        </div>
    );
}

    return(
    <div className="carts">
        {
        Cart.map(product => <ItemCart key={product.id} product={product} />)
        }
        <p>
            total: {totalPrice()}
        </p>
        </div>
    )
}

export default Cart