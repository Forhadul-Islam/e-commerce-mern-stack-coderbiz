import React from 'react';
import { Badge, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addToCartAction } from '../../redux/actions/cartActions';
import { loadSingleProduct } from '../../redux/actions/productActions';

const CourseItemCard = ({ id, title, image, description, price, sale}) => {
    const history = useHistory()
    const dispatch = useDispatch();
    const {cart} = useSelector(state => state.cartReducer)
    const item = {
        id,
        title, 
        image,
        price, 
        sale
    }
    
    const addToCart = () =>{
        dispatch(addToCartAction(cart, item))
    }

    const handleViewProduct = () => {
        dispatch(loadSingleProduct(id))
        history.push(`/courses/${id}`)
        
    }

    const Price = () =>{
        return <>
        {sale?
        <>
         <div className="card__discount--price"> ${price} </div> 
         <div className="card__price">${Math.round(price - sale*price)} </div> 
         </>
         : <div className="card__price">${price}</div>}
        </>
    }

    return (
        <>
            <Card className="card" >
                <Card.Img variant="top" src={image} />
                <Card.Body onClick={handleViewProduct}>
                    <Card.Title className="card__title" >{title}</Card.Title>
                    <Card.Text className="card__description">
                        {description}
                    </Card.Text>
                </Card.Body>
                {
                    sale ? <Card.Text className="card__discount" text="secondary">
                    <Badge variant="success">{Math.round(sale *100)}% off </Badge>
                    <Price />
                    </Card.Text> 
                    : <Card.Text className="card__discount" text="secondary">
                        <Badge variant="warning">No Discount</Badge>
                        <Price />
                </Card.Text>
                }
                <Card.Body className="card__button">
                <Button 
                onClick={addToCart}
                className="card__button--addToCart"  
                variant="info" size="lg"
                >
                    Add to cart
                </Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default CourseItemCard
