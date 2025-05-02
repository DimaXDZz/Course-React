import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from './cartActions';
import './Cart.css'; 

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className="cart"> 
      <h2>Корзина</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} {item.price} - <button onClick={() => handleRemoveFromCart(item.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;