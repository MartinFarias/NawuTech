
import '../CartWidget/CartWidget.css';

function CartWidget ()  {
    return(
        <>
    <img src={require('../../Assets/carrito.png')} 

className="carrito"
alt="logo Carrito"/>
<b></b>
<p className="cero">0</p>
</>
 );
}


 export default CartWidget;