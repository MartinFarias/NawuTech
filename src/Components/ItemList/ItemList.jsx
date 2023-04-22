import React from 'react'
import Item from '../../Components/ItemList/Item'

const ItemList = ({data = []}) => {
    return (
        data.map(procesador => <Item key={procesador.id} info={procesador} />)
      );
}

export default ItemList;
