import PropTypes from 'prop-types';
import { ProductType } from '../../propTypes';

import Product from '../Product';
import styles from './ProductList.scss';

const ProductList = ({ products }) => (
  <div className={styles.productList}>
    {products.map((product) => (
      <Product key={product.id} product={product} />
    ))}
  </div>
);

ProductList.propTypes = {
  products: PropTypes.arrayOf(ProductType),
};

export default ProductList;
