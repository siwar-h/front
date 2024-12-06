import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useCart} from 'react-use-cart';

const ItemCard = (props) => {
    const {addItem}=useCart();
    const zoomStyle = {
        overflow: 'hidden',
        position: 'relative',
      };
    
      const imageStyle = {
        transition: 'transform 0.3s ease-in-out',
      };
    
      const handleMouseOver = (e) => {
        e.currentTarget.style.transform = 'scale(1.2)';
      };
    
      const handleMouseOut = (e) => {
        e.currentTarget.style.transform = 'scale(1)';
      };
    
      return (
        <Card className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
          <div style={zoomStyle}>
            <Card.Img
              variant="top"
              src={props.image}
              style={imageStyle}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
          </div>
          <Card.Body className="text-center">
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>${props.price}</Card.Text>
            <Card.Text>{props.description}</Card.Text>
            <Button
              className="btn btn-success"
              onClick={() => addItem(props.item)}
            >
              Add To Cart
            </Button>
          </Card.Body>
        </Card>
  )
}

export default ItemCard
