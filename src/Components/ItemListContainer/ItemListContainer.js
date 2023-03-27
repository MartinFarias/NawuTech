import React from 'react';
import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import arrayProductos from '../json/arrayProductos.json'
import ItemList from '../ItemList/ItemList.js';

const ItemListContainer = () => {
  const [item, setItem] = useState ([])
  const {id} = useParams ();

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve( arrayProductos)
      },2000)
  });

  promesa.then((data) => {
    setItem(data)
  })
},[id])
console.log(item);


return (
  <div className="container">
    <div className="row">
      <ItemList item={item}/>

    </div>
  </div>
)
}
export default ItemListContainer;