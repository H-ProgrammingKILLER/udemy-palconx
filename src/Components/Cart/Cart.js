import React from 'react';
import {Card, Button } from 'react-bootstrap';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, coursePrice) => total + coursePrice.price, 0);
    const tax = (total / 100) * 7;
    const solveFloatNumber = (number) => {
        const floorFloat = Math.ceil(number);
        return Number(floorFloat);
    }
    console.log(props.cart)
    return (
        <div className='cart-card'>
            <Card>
                <Card.Header as="h5">Cart</Card.Header>
                <Card.Body>
                    <Card.Title>Total Cart Item: {cart.length}</Card.Title>
                    <Card.Text><h5>Price: {total}</h5></Card.Text>
                    <Card.Text><h5>Tax: {solveFloatNumber(tax)}</h5></Card.Text>
                    <Card.Title>Total Cart Item: {solveFloatNumber(tax) + total}</Card.Title>
                    <Button variant="primary">Go To Cart</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Cart;