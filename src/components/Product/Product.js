import { ProductType } from '../../propTypes';
import styles from './Product.scss';

const Product = ({ product }) => (
  <li className={styles.product}>
    {product.name}
    <img src="https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp" />
    <p>category:{product.category}</p>
    <p>colour: {product.colour}</p>
    <p>description: {product.description}</p>
    <p>price: {product.price}</p>
    <p>material: {product.material}</p>
  </li>
);

Product.propTypes = {
  product: ProductType,
};

export default Product;
