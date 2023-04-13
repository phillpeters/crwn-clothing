import { useContext } from 'react';

import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';

import { CartContext } from '../../contexts/CartContext';

import './CartDropdown.scss';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <Button type="button">Go to checkout</Button>
    </div>
  );
};

export default CartDropdown;
