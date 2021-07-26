import { Carousel } from 'react-responsive-carousel';
import { ProductType } from '../../propTypes';
import styles from './Product.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { getMediaType } from '../../utils';

const Product = ({ product }) => {
  const isPhone = getMediaType() === 'PHONE';

  return (
    <li className={styles.product}>
      {product.name}
      {isPhone ? (
        <img src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg" />
      ) : (
        <Carousel>
          <div>
            <img src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg" />
          </div>
          <div>
            <img src="https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp" />
          </div>
          <div>
            <img src="https://static01.nyt.com/images/2019/06/17/science/17DOGS/17DOGS-mobileMasterAt3x-v2.jpg" />
          </div>
        </Carousel>
      )}
      <p>category:{product.category}</p>
      <p>colour: {product.colour}</p>
      <p>description: {product.description}</p>
      <p>price: {product.price}</p>
      <p>material: {product.material}</p>
    </li>
  );
};
Product.propTypes = {
  product: ProductType,
};

export default Product;
