import './Item.css';
import {Link} from 'react-router-dom';
import React from 'react';



const Item = ({info}) => {

return (
<Link to={`/detalle/${info.id}`} className="procesador">
    <div className="centrador">
    <img src={info.imagen} className='foto' alt="imagenes"/> 
    <br />
    <p className='informacion neon'>{info.nombre}</p>
    </div>
</Link>
);
}

export default Item;