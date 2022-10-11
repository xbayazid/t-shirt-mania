import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveItem}) => {
    let message;
    if(cart.length === 0){
        message = <p>Please buy minimum one item!!!</p>
    }
    else{
        message = <p>Thanks for buying!</p>
    }
    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Order quantity: {cart.length}</h5>
            {
                cart.map(tshirt => <p 
                    key={tshirt._id}
                >
                    {tshirt.name}
                    <button className='remove-btn' onClick={() => handleRemoveItem(tshirt)}>X</button>
                </p>)
            }
            {
                message
            }
        </div>
    );
};

export default Cart;


/**
 * conditional Rendering
 * 1. use element and if-else
 */