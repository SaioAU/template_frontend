import { useState } from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';

import FetchWrapper from '../FetchWrapper';
import { ProductType } from '../../propTypes';
import { getMediaType } from '../../utils';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Product from '../Product';
import styles from './ProductList.scss';

const ProductList = ({ products, loading, error }) => {
  const [highlightedProductId, setHighlightedProductId] = useState();

  if (getMediaType() === 'PHONE') {
    return (
      <Carousel onSwipeEnd={() => setHighlightedProductId()}>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            detailView={highlightedProductId === product.id}
            onClick={() => setHighlightedProductId(product.id)}
          />
        ))}
      </Carousel>
    );
  }

  return (
    <FetchWrapper loading={loading} error={error}>
      <ul className={styles.productList}>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            detailView={highlightedProductId === product.id}
            onClick={() => setHighlightedProductId(product.id)}
          />
        ))}
      </ul>
    </FetchWrapper>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(ProductType),
  loading: PropTypes.bool,
  error: PropTypes.bool,
};

export default ProductList;
