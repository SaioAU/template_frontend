import { isEmpty, equals } from 'ramda';
import { useCallback, useState, useEffect, useMemo } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { useAutheticatedFetch, useData } from 'app/hooks';
import { DEFAULT_VALUES, DEFAULT_SCALAR_PRODUCT_VALUES, SCALAR_PRODUCT_FIELDS } from 'app/constants';
import { FetchWrapper } from 'app/components';

import ProductFields from '../ProductFields';
import styles from './EditProduct.scss';

const EditProduct = () => {
  const authenticatedFetch = useAutheticatedFetch();
  const { go } = useHistory();
  const { push } = useHistory();
  const { productId } = useParams();
  const { data: product, loading, error } = useData(`products/read/?id=${productId}`);

  const [images, setImages] = useState([]);
  const [seasonId, setSeasonId] = useState('');
  const [scalarValues, setScalarValues] = useState(DEFAULT_SCALAR_PRODUCT_VALUES);

  const back = useCallback(() => push('/admin/products'), [push]);

  const initialScalarValues = useMemo(
    () =>
      Object.entries(SCALAR_PRODUCT_FIELDS).reduce(
        (fields, [name, type]) => ({ ...fields, [name]: product?.[name] ?? DEFAULT_VALUES[type] }),
        {},
      ),
    [product],
  );

  useEffect(() => {
    if (
      !isEmpty(initialScalarValues) &&
      equals(scalarValues, DEFAULT_SCALAR_PRODUCT_VALUES) &&
      !equals(initialScalarValues, DEFAULT_SCALAR_PRODUCT_VALUES)
    ) {
      setScalarValues(initialScalarValues);
    }
  }, [initialScalarValues, scalarValues]);

  useEffect(() => {
    if (isEmpty(images) && product?.images && !isEmpty(product?.images)) setImages(product.images);
  }, [images, product]);

  useEffect(() => {
    if (!seasonId && product?.seasonId) setSeasonId(product.seasonId);
  }, [product, seasonId]);

  const onSubmitEdit = useCallback(
    async (event) => {
      event.preventDefault();
      event.stopPropagation();
      const response = await authenticatedFetch('products/update', {
        method: 'PATCH',
        body: JSON.stringify({
          id: productId,
          ...scalarValues,
          seasonId,
          images,
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.status !== 200) console.error('Error saving edits', await response.json());
      else go(0);
    },
    [authenticatedFetch, go, images, productId, seasonId, scalarValues],
  );

  const hasChanges = !equals(initialScalarValues, { ...scalarValues, images, seasonId });

  return (
    <FetchWrapper loading={loading} error={error}>
      <h1>Product edit</h1>
      <div>
        <h2>Products</h2>
        <form autoComplete="off" className={styles.productForm} onSubmit={onSubmitEdit}>
          <ProductFields
            scalarValues={scalarValues}
            setScalarValues={setScalarValues}
            seasonId={seasonId}
            setSeasonId={setSeasonId}
            images={images}
            setImages={setImages}
          />
          <button type="submit" disabled={!hasChanges}>
            Save
          </button>
          <button type="button" onClick={back}>
            Back
          </button>
        </form>
      </div>
    </FetchWrapper>
  );
};

export default EditProduct;
