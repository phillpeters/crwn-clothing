import { useContext } from 'react';

import Button from '../Button/Button';

import { CartContext } from '../../contexts/CartContext';

import './ProductCard.scss';

interface Props {
  product: {
    name: string;
    price: number;
    imageUrl: string;
  };
}

const ProductCard = ({ product }: Props) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button type="button" buttonStyle="inverted" onClick={addProductToCart}>
        Add To Cart
      </Button>
    </div>
  );
};

export default ProductCard;
