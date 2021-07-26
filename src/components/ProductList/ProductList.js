import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import { ProductType } from '../../propTypes';
import { getMediaType } from '../../utils';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Product from '../Product';
import styles from './ProductList.scss';

const ProductList = ({ products }) => {
  if (getMediaType() === 'PHONE') {
    return (
      <Carousel>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Carousel>
    );
  }
  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(ProductType),
};

export default ProductList;
