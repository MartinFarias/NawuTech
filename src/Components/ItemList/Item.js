import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({item}) => {
 return (
    <Link to={"/Item/" + item.id} className="text-decoration-none">
    <div className="container">
        <div className="card border border-">
            <img src={item.imagen} className="car-img.top" alt={item.nombre}/>
            <div className="card-body text-center">
                <p className="card-text">{item.nombre}</p>
            </div>
        </div>      
    </div>
    </Link>
  )
}

export default Item;