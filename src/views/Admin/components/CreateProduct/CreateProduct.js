import { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { DEFAULT_SCALAR_PRODUCT_VALUES } from 'app/constants';
import { useAutheticatedFetch } from 'app/hooks';

import ProductFields from '../ProductFields';
import styles from './CreateProduct.scss';

const CreateProduct = () => {
  const authenticatedFetch = useAutheticatedFetch();
  const { go, back } = useHistory();
  const [scalarValues, setScalarValues] = useState(DEFAULT_SCALAR_PRODUCT_VALUES);
  const [seasonId, setSeasonId] = useState('');
  const [images, setImages] = useState([]);

  const onSubmitCreate = useCallback(
    async (event) => {
      event.preventDefault();
      event.stopPropagation();

      const response = await authenticatedFetch('products/create', {
        method: 'POST',
        body: JSON.stringify({
          ...scalarValues,
          seasonId,
          images,
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.status !== 200) console.log('Error creating product:', await response.json());
      else go(0);
    },
    [authenticatedFetch, go, images, scalarValues, seasonId],
  );

  return (
    <div>
      <h1>Product create</h1>
      <div>
        <h2>Products</h2>
        <form autoComplete="off" className={styles.productForm} onSubmit={onSubmitCreate}>
          <ProductFields
            scalarValues={scalarValues}
            setScalarValues={setScalarValues}
            seasonId={seasonId}
            setSeasonId={setSeasonId}
            images={images}
            setImages={setImages}
          />
          <button type="submit">Create</button>
          <button type="button" onClick={back}>
            Back
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
