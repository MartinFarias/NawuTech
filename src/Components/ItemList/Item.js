import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom"

const Item = ({item}) => {
  return (
    <Link to={"/item/" + item.id}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.app.goo.gl/arYsvKDN1wh5mM1VA" />
      <Card.Body>
        <Card.Title>{Item.nombre}</Card.Title>
        <Card.Text>{Item.precio}</Card.Text>
        <Button variant="primary">Sumar al Carrito</Button>
      </Card.Body>
    </Card>
    </Link>
  );
}

export default Item;