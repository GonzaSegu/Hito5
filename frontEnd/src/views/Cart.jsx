import React, { useState } from 'react';
import '../assets/css/Cart.css';
import {pizzaCart} from '../data/listado_pizzas';

import { Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';

const Cart = () => {
    // Asegúrate de que todas las pizzas tengan quantity: 0 al inicializar el estado
    const [cart, setCart] = useState(
        pizzaCart.map(pizza => ({ ...pizza, quantity: 0 }))
    );

    const sumar = (id) => {
        setCart(cart.map(pizza => 
            pizza.id === id ? { ...pizza, quantity: pizza.quantity + 1 } : pizza
        ));
    };

    const restar = (id) => {    
        setCart(cart.map(pizza =>
            pizza.id === id ? { ...pizza, quantity: Math.max(pizza.quantity - 1, 0) } : pizza
        ));
    };

    const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.quantity, 0);


    return (
        <div className="cart-container">
            <h2>Tu Carrito</h2>
            {cart.length === 0 ? (
                <p>Tu carrito está vacío.</p>
            ) : (
                <ul className="cart-list">
                    {cart.map(pizza => (
                        <li key={pizza.id} className="cart-item">
                            <div className="cart-card">
                                <img className="cart-card-img" src={pizza.img} alt={pizza.name} />
                                <div className="cart-card-body">
                                    <h3 className="cart-card-title">{pizza.name}</h3>
                                    <p><strong>Precio:</strong> ${pizza.price.toLocaleString()}</p>
                                    <p><strong>Cantidad:</strong> {pizza.quantity}</p>
                                    <div className="cart-card-buttons">
                                        <button className="btn btn-danger" onClick={() => restar(pizza.id)}>-</button>
                                        <button className="btn btn-success" onClick={() => sumar(pizza.id)}>+</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            <h3>Total: ${total.toLocaleString()}</h3>
            <button className="btn btn-primary" disabled={cart.length === 0}>
                Pagar
            </button>
        </div>
    );
};

export default Cart;