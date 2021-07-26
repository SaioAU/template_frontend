import { useState } from 'react';

import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import { ProductType } from '../../propTypes';
import { getMediaType } from '../../utils';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Product from '../Product';
import styles from './ProductList.scss';

const ProductList = ({ products }) => {
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
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(ProductType),
};

export default ProductList;
